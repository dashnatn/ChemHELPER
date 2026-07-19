const medicines = {
    "Дексалин": {
        help: "Удушение (2), Кровопотеря (1)",
        recipe: "1x Плазма + 50x Кислород = 75 ун."
    },
    "Дексалин плюс": {
        help: "Удушение (7), Кровопотеря (6)",
        recipe: "1x Плазма + 20x Кислород + 30x Железо + 30x Углерод = 90 ун*."
    },
    "Инапровалин": {
        help: "Удушение (10 в крите), Кровопотеря",
        recipe: "30x Кислород + 30x Сахар + 30x Углерод = 90 ун."
    },
    "Транексамовая кислота": {
        help: "Кровотечение",
        recipe: "10x Водород + 10x Сера + 30x Кислород + 10x Углерод + 40x Сахар = 90 ун."
    },
    "Железо (НеАрахниды)": {
        help: "Восполнение крови",
        recipe: "100x Железо = 100 ун."
    },
    "Медь (Арахниды)": {
        help: "Восполнение крови",
        recipe: "100x Медь = 100 ун."
    },
    "Физраствор": {
        help: "Восполнение крови, жажда",
        recipe: "80x Вода + 10x Натрий + 10x Хлор (нагреть 1-2 мин) = 100 ун."
    },
    "Бикаридин": {
        help: "Механические повреждения (4)",
        recipe: "15x Кислород + 15x Сахар + 60x Углерод = 90 ун."
    },
    "Бруизин": {
        help: "Ушибы (7)",
        recipe: "5x Кислород + 35x Сахар + 20x Углерод + 30x Литий = 60* ун."
    },
    "Лацеринол": {
        help: "Порезы (6)",
        recipe: "5x Кислород + 5x Сахар + 30x Водород + 50x Углерод (нагреть 1 мин) = 60 ун."
    },
    "Пунктураз": {
        help: "Уколы (8)",
        recipe: "5x Сахар + 15x Водород + 20x Кислород + 20x Углерод (нагреть 1 мин) = 60 ун."
    },
    "Келотан": {
        help: "Ожоги (0.66), Шок (0.66), Обморожение (0.66)",
        recipe: "45x Кремний + 45x Углерод = 90 ун."
    },
    "Дермалин": {
        help: "Ожоги (3), Шок (3), Обморожение (3)",
        recipe: "15x Кремний + 15x Углерод + 30x Фосфор + 30x Кислород = 90 ун."
    },
    "Пиразин": {
        help: "Ожоги (10)",
        recipe: "(1x Плазма + 5x Углерод + 10x Железо + 10x Фосфор + 15x Медь + 15x Кремний) + 10x Кислород (нагреть 1 мин) + 30x Углерод (нагреть 3-4 мин) = 90 ун*."
    },
    "Инсузин": {
        help: "Электрические повреждения (8)",
        recipe: "1x Плазма + 5x Железо + 10x Медь + 10x Углерод + 20x Водород + 35x Кремний (нагреть 1 мин) + 10x Углерод (нагреть 2 мин) = 60 ун*."
    },
    "Лепоразин": {
        help: "Обморожение (8)",
        recipe: "1x Плазма + 20x Железо + 20x Кремний + 40x Медь = 80 ун*."
    },
    "Сигинат": {
        help: "Кислотные повреждения (6)",
        recipe: "3x Водород + 1x Азот + 2x Натрий + 2x Хлор + 13x Кислород + 10x Кремний + 15x Углерод (нагреть 1 мин) + 10x Водород + 10x Натрий + 15x Сахар + 15x Вода (нагреть 1 мин) = 60 ун*."
    },
    "Сидерлак": {
        help: "Кислотные повреждения (10)",
        recipe: "3x Алоэ + 1x Галакточертополох (измельчить) = 6 ун*."
    },
    "Фалангимин": {
        help: "Клеточные повреждения (2)",
        recipe: "5x Азот + 5x Калий + 5x Кремний + 10x Фосфор + 10x Хлор + 25x Радий + 30x Этанол = 90 ун."
    },
    "Диловен": {
        help: "Яды (2)",
        recipe: "30x Азот + 30x Калий + 30x Кремний = 90 ун."
    },
    "Стеллибинин": {
        help: "Яды (8)",
        recipe: "4x Галакточертополох (измельчить) = 100 ун."
    },
    "Хироналин": {
        help: "Радиация (2)",
        recipe: "15x Азот + 15x Калий + 15x Кремний + 45x Радий = 90 ун."
    },
    "Аритразин": {
        help: "Радиация (6)",
        recipe: "5x Азот + 5x Калий + 5x Кремний + 15x Радий + 30x Водород = 60 ун."
    },
    "Криоксадон": {
        help: "Механические (8), Физические (12), Удушение (12), Токсины (8) (работает при низких температурах)",
        recipe: "(1x Плазма + 20x Кислород) + 30x Кислород + 30x Вода = 90 ун."
    },
    "Эпинефрин": {
        help: "Механические (1), Яды (1), Физические (1), Удушение (6)",
        recipe: "30x Водород + 25x Кислород + 20x Хлор + 15x Углерод + 10x Сварочное топливо (нагреть 1 мин) + 5x Сварочное топливо = 80 ун*."
    },
    "Трикордразин": {
        help: "Ожоги (0.66), Шок (0.66), Обморожение (0.66), Механические (2), Яды (1)",
        recipe: "15x Кислород + 15x Сахар + 15x Углерод + 15x Азот + 15x Калий + 15x Кремний = 90 ун."
    },
    "Омнизин": {
        help: "Механические (4), Физические (4), Удушение (4), Токсины (4)",
        recipe: "Не крафтится, добывается в ботанике/экспедициях."
    },
    "Ихор": {
        help: "Механические (5), Физические (5), Токсины (2), Кровопотеря (5)",
        recipe: "Не крафтится, добывается из драконов."
    },
    "Синаптизин": {
        help: "Антистан, анти-галлюцинации",
        recipe: "30x Литий + 30x Сахар + 30x Вода = 90 ун."
    },
    "Эфедрин": {
        help: "Антистан, скорость",
        recipe: "10x Сварочное топливо + 3x Азот + 41x Водород + 8x Углерод + 12x Этанол + 25x Сахар = 96 ун*."
    },
    "Дезоксиэфедрин": {
        help: "Антистан, скорость",
        recipe: "5x Сварочное топливо + 1x Азот + 11x Водород + 2x Углерод + 3x Этанол + 6x Сахар + 24x Фосфор + 24x Йод + 24x Углерод (нагреть 1 мин) = 96 ун."
    }
};

// Основные элементы интерфейса
const medName = document.getElementById('medName');
const medRecipe = document.getElementById('medRecipe');
const searchIcon = document.getElementById('searchIcon');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const closeSearch = document.getElementById('closeSearch');
const themeSwitcher = document.getElementById('themeSwitcher');
const discordIcon = document.getElementById('discordIcon');
const githubIcon = document.getElementById('githubIcon');
const body = document.body;
const clownLogo = document.getElementById('clownLogo');

// ==================== ОСНОВНЫЕ ФУНКЦИИ ====================

// Показать информацию о лекарстве
function showMedicineInfo(name) {
    if (medicines[name]) {
        medName.textContent = name;
        medRecipe.innerHTML = `
            <strong>От чего помогает:</strong> ${medicines[name].help}<br><br>
            <strong>Рецепт:</strong><br>${medicines[name].recipe}
        `;
    }
}

// Инициализация обработчиков для dropdown меню
function initMedicineDropdowns() {
    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const medicineName = this.getAttribute('data-med');
            showMedicineInfo(medicineName);
            
            // Закрываем dropdown после выбора
            this.closest('.dropdown-content').style.display = 'none';
        });
    });
}

// Инициализация кнопок dropdown
function initDropdownButtons() {
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });
}

// Поиск лекарств
function initSearch() {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = '';
        
        if (query.length > 0) {
            const filtered = Object.keys(medicines).filter(name => 
                name.toLowerCase().includes(query)
            );
            
            if (filtered.length > 0) {
                filtered.forEach(name => {
                    const div = document.createElement('div');
                    div.className = 'search-item';
                    div.textContent = name;
                    div.addEventListener('click', () => {
                        showMedicineInfo(name);
                        closeSearchModal();
                    });
                    searchResults.appendChild(div);
                });
                searchResults.classList.add('active');
            } else {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.textContent = 'Ничего не найдено';
                searchResults.appendChild(div);
                searchResults.classList.add('active');
            }
        } else {
            searchResults.classList.remove('active');
        }
    });
}

// Управление модальным окном поиска
function openSearchModal() {
    searchModal.classList.add('active');
    searchInput.focus();
}

// Закрыть модальное окно поиска
function closeSearchModal() {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchResults.classList.remove('active');
}

// ==================== ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ====================

// Переключение темы
function toggleTheme() {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeSwitcher.innerHTML = '<svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeSwitcher.innerHTML = '<svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
        localStorage.setItem('theme', 'dark');
    }
}

// Анимация клоунов
function spawnClowns() {
    const clownCount = 50;
    for (let i = 0; i < clownCount; i++) {
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

// Закрытие dropdown при клике вне его
function initCloseDropdownsOnClickOutside() {
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

// Проверка сохраненной темы
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeSwitcher.innerHTML = '<svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    }
}

// Инициализация всех обработчиков событий
function initEventListeners() {
    themeSwitcher.addEventListener('click', toggleTheme);
    
    discordIcon.addEventListener('click', () => window.open('https://discord.gg/DF4aZzK8Gk', '_blank'));
    githubIcon.addEventListener('click', () => window.open('https://github.com/dashnatn', '_blank'));
    
    searchIcon.addEventListener('click', openSearchModal);
    closeSearch.addEventListener('click', closeSearchModal);
    searchModal.addEventListener('click', (e) => e.target === searchModal && closeSearchModal());
    
    clownLogo.addEventListener('click', () => {
        body.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            body.style.transform = 'none';
            spawnClowns();
        }, 1000);
    });
}

function init() {
    initTheme();
    initDropdownButtons();
    initMedicineDropdowns();
    initCloseDropdownsOnClickOutside();
    initSearch();
    initEventListeners();
    showMedicineInfo('Дексалин');
}

window.addEventListener('DOMContentLoaded', init);
