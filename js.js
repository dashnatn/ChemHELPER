// LEKARSTVA
const medicines = {
    "Дексалин": {
        help: "Удушение (2), Кровопотеря (1)",
        recipe: "1x Плазма + 50x Кислород = 75 ун."
    },
    // ... (остальные лекарства остаются без изменений)
};

// Основные элементы
const searchIcon = document.getElementById('searchIcon');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const medName = document.getElementById('medName');
const medRecipe = document.getElementById('medRecipe');
const themeSwitcher = document.getElementById('themeSwitcher');
const discordIcon = document.getElementById('discordIcon');
const githubIcon = document.getElementById('githubIcon');
const body = document.body;
const clownLogo = document.getElementById('clownLogo');
const closeSearch = document.getElementById('closeSearch');

// Элементы обратной связи
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackModal = document.getElementById('feedbackModal');
const feedbackText = document.getElementById('feedbackText');
const sendFeedback = document.getElementById('sendFeedback');
const closeFeedback = document.getElementById('closeFeedback');
const feedbackTimer = document.getElementById('feedbackTimer');
const timerValue = document.getElementById('timerValue');

// Webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1358424547937747157/L8QaBS9CY7wK7h4Y57XiCYknx-dr8Gv5fEgCE_phVEtClr8oGFCsZqiBz3SWwgq1ZN6W';

// Таймер обратной связи
let feedbackCooldown = false;
let cooldownInterval;

// Проверяем, есть ли таймер в localStorage
if (localStorage.getItem('feedbackCooldownEnd')) {
    const endTime = parseInt(localStorage.getItem('feedbackCooldownEnd'));
    const currentTime = Math.floor(Date.now() / 1000);
    
    if (currentTime < endTime) {
        startCooldown(endTime - currentTime);
    }
}

// Функции для обратной связи
function openFeedbackModal() {
    feedbackModal.classList.add('active');
    feedbackText.focus();
}

function closeFeedbackModal() {
    feedbackModal.classList.remove('active');
    feedbackText.value = '';
}

function sendFeedbackToDiscord() {
    const message = feedbackText.value.trim();
    
    if (!message) {
        alert('Пожалуйста, введите ваше сообщение');
        return;
    }
    
    sendFeedback.disabled = true;
    sendFeedback.textContent = 'Отправка...';
    
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `Новый отзыв от пользователя:\n\`\`\`${message}\`\`\``
        }),
    })
    .then(() => {
        alert('Спасибо за ваш отзыв!');
        closeFeedbackModal();
        startCooldown(300); // 300 секунд = 5 минут
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка отправки');
        }
        return response.json();
    })
    .finally(() => {
        sendFeedback.disabled = false;
        sendFeedback.textContent = 'Отправить';
    });
}

function startCooldown(seconds) {
    feedbackCooldown = true;
    feedbackBtn.classList.add('disabled');
    
    const endTime = Math.floor(Date.now() / 1000) + seconds;
    localStorage.setItem('feedbackCooldownEnd', endTime.toString());
    
    updateTimer(seconds);
    feedbackTimer.classList.add('timer-visible');
    
    cooldownInterval = setInterval(() => {
        seconds--;
        updateTimer(seconds);
        
        if (seconds <= 0) {
            clearInterval(cooldownInterval);
            feedbackCooldown = false;
            feedbackBtn.classList.remove('disabled');
            feedbackTimer.classList.remove('timer-visible');
            localStorage.removeItem('feedbackCooldownEnd');
        }
    }, 1000);
}

function updateTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerValue.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Остальные функции (из оригинального кода)
function toggleTheme() {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

function showMedicineInfo(name) {
    if (medicines[name]) {
        medName.textContent = name;
        medRecipe.innerHTML = `
            <strong>От чего помогает:</strong> ${medicines[name].help}<br><br>
            <strong>Рецепт:</strong><br>${medicines[name].recipe}
        `;
    }
}

function openSearchModal() {
    searchModal.classList.add('active');
    searchInput.focus();
}

function closeSearchModal() {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchResults.classList.remove('active');
}

function spawnClowns() {
    const clownCount = 500; 
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

// События
themeSwitcher.addEventListener('click', toggleTheme);
discordIcon.addEventListener('click', () => window.open('https://discord.gg/RhBdgqSHqh', '_blank'));
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

// События обратной связи
feedbackBtn.addEventListener('click', () => {
    if (!feedbackCooldown) openFeedbackModal();
});
closeFeedback.addEventListener('click', closeFeedbackModal);
feedbackModal.addEventListener('click', (e) => e.target === feedbackModal && closeFeedbackModal());
sendFeedback.addEventListener('click', sendFeedbackToDiscord);

// Поиск лекарств
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    
    if (query.length === 0) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
        return;
    }
    
    searchResults.innerHTML = '';
    
    const matches = Object.keys(medicines).filter(name => 
        name.toLowerCase().includes(query)
    );
    
    if (matches.length > 0) {
        matches.forEach(name => {
            const div = document.createElement('div');
            div.className = 'search-item';
            
            const startIdx = name.toLowerCase().indexOf(query);
            const endIdx = startIdx + query.length;
            
            const before = name.substring(0, startIdx);
            const match = name.substring(startIdx, endIdx);
            const after = name.substring(endIdx);
            
            div.innerHTML = `${before}<span class="highlight">${match}</span>${after}`;
            
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
});

// Клики по лекарствам в dropdown
document.querySelectorAll('[data-med]').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        showMedicineInfo(item.getAttribute('data-med'));
    });
});

// Инициализация
window.addEventListener('DOMContentLoaded', () => {
    showMedicineInfo('Дексалин');
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') toggleTheme();
});