import { MEDICINES } from './data.js';

const state = { currentCategory: null };

const els = {
    medName: document.getElementById('medName'),
    medRecipe: document.getElementById('medRecipe'),
    nav: document.getElementById('mainNav'),
    searchIcon: document.getElementById('searchIcon'),
    searchModal: document.getElementById('searchModal'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    closeSearch: document.getElementById('closeSearch'),
    themeSwitcher: document.getElementById('themeSwitcher'),
    discordIcon: document.getElementById('discordIcon'),
    githubIcon: document.getElementById('githubIcon'),
    clownLogo: document.getElementById('clownLogo'),
};

const ICON_MOON = '<svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const ICON_SUN = '<svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

function groupByCategory(medicines) {
    const groups = new Map();
    for (const [name, info] of Object.entries(medicines)) {
        const key = info.category || 'Прочее';
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(name);
    }
    return groups;
}

function buildNav() {
    const groups = groupByCategory(MEDICINES);
    els.nav.innerHTML = '';
    for (const [category, names] of groups) {
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown';

        const button = document.createElement('button');
        button.className = 'dropbtn';
        button.innerHTML = `${category}
            <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
        button.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';
            document.querySelectorAll('.dropdown-content').forEach(d => (d.style.display = 'none'));
            content.style.display = isOpen ? 'none' : 'block';
        });

        const content = document.createElement('div');
        content.className = 'dropdown-content';
        for (const name of names) {
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = name;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                showMedicineInfo(name);
                content.style.display = 'none';
            });
            content.appendChild(a);
        }

        dropdown.append(button, content);
        els.nav.appendChild(dropdown);
    }
}

function showMedicineInfo(name) {
    const info = MEDICINES[name];
    if (!info) return;
    els.medName.textContent = name;
    els.medRecipe.innerHTML = `
        <strong>Категория:</strong> ${info.category}<br><br>
        <strong>Действие:</strong> ${info.help}<br><br>
        <strong>Рецепт:</strong><br>${info.recipe}
    `;
}

function initSearch() {
    els.searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        els.searchResults.innerHTML = '';

        if (query.length === 0) {
            els.searchResults.classList.remove('active');
            return;
        }

        const matches = Object.keys(MEDICINES).filter(name => name.toLowerCase().includes(query));
        if (matches.length === 0) {
            const div = document.createElement('div');
            div.className = 'search-item';
            div.textContent = 'Ничего не найдено';
            els.searchResults.appendChild(div);
        } else {
            for (const name of matches) {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.textContent = name;
                div.addEventListener('click', () => {
                    showMedicineInfo(name);
                    closeSearchModal();
                });
                els.searchResults.appendChild(div);
            }
        }
        els.searchResults.classList.add('active');
    });
}

function openSearchModal() {
    els.searchModal.classList.add('active');
    els.searchInput.focus();
}

function closeSearchModal() {
    els.searchModal.classList.remove('active');
    els.searchInput.value = '';
    els.searchResults.innerHTML = '';
    els.searchResults.classList.remove('active');
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        body.removeAttribute('data-theme');
        els.themeSwitcher.innerHTML = ICON_MOON;
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        els.themeSwitcher.innerHTML = ICON_SUN;
        localStorage.setItem('theme', 'dark');
    }
}

function initTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        els.themeSwitcher.innerHTML = ICON_SUN;
    }
}

function spawnClowns() {
    const count = 50;
    for (let i = 0; i < count; i++) {
        const clown = document.createElement('img');
        clown.src = 'assets/clownlogo.ico';
        clown.className = 'clown-face';
        clown.style.left = `${Math.random() * 100}vw`;
        clown.style.top = `${Math.random() * 100}vh`;
        clown.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(clown);
    }
    setTimeout(() => {
        document.querySelectorAll('.clown-face').forEach(c => c.remove());
    }, 5000);
}

function initCloseDropdownsOnClickOutside() {
    document.addEventListener('click', (e) => {
        if (!e.target.matches('.dropbtn')) {
            document.querySelectorAll('.dropdown-content').forEach(d => (d.style.display = 'none'));
        }
    });
}

function initEventListeners() {
    els.themeSwitcher.addEventListener('click', toggleTheme);
    els.discordIcon.addEventListener('click', () => window.open('https://discord.gg/DF4aZzK8Gk', '_blank'));
    els.githubIcon.addEventListener('click', () => window.open('https://github.com/dashnatn', '_blank'));
    els.searchIcon.addEventListener('click', openSearchModal);
    els.closeSearch.addEventListener('click', closeSearchModal);
    els.searchModal.addEventListener('click', (e) => e.target === els.searchModal && closeSearchModal());
    els.clownLogo.addEventListener('click', () => {
        document.body.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            document.body.style.transform = 'none';
            spawnClowns();
        }, 1000);
    });
}

function init() {
    initTheme();
    buildNav();
    initCloseDropdownsOnClickOutside();
    initSearch();
    initEventListeners();
    showMedicineInfo('Дексалин');
}

window.addEventListener('DOMContentLoaded', init);
