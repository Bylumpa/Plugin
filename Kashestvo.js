(function () {
    'use strict';

function my_qual() {
/*
// Глобальные переменные
var backend = 'http://212.113.103.137:835/quality'; // Адрес запроса
var qualityCache = {
    data: null,
    timestamp: null
};
var CACHE_EXPIRATION_TIME = 3600000; // 1 час в миллисекундах

// Флаг для предотвращения многократного вызова updateCards
var isProcessing = false;

// Установка дебаунса
var debounceTimeout;
var DEBOUNCE_DELAY = 1; // Задержка 5 мс

// Загрузка кэшированных данных из localStorage
var cachedQuality = localStorage.getItem('qualityCache');
if (cachedQuality) {
    qualityCache = JSON.parse(cachedQuality);
}

// Создание MutationObserver для отслеживания добавления новых карточек
var observer = new MutationObserver(function(mutations) {
    var newCards = [];

    mutations.forEach(function(mutation) {
        // Проверяем только добавленные узлы
        if (mutation.addedNodes.length) {
            for (var j = 0; j < mutation.addedNodes.length; j++) {
                var node = mutation.addedNodes[j];

                // Игнорируем неэлементные узлы
                if (node.nodeType !== 1) continue; // Node.ELEMENT_NODE равно 1 в ES5

                // Если это карточка, добавляем её
                if (node.matches('.card')) {
                    newCards.push(node);
                }

                // Ищем карточки внутри добавленного узла
                var cardsInNode = node.querySelectorAll('.card');
                for (var k = 0; k < cardsInNode.length; k++) {
                    newCards.push(cardsInNode[k]);
                }
            }
        }
    });

    // Обрабатываем новые карточки с дебаунсом
    if (newCards.length && !isProcessing) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(function() {
            isProcessing = true;
            updateCards(newCards);
            isProcessing = false; // Сброс флага после обработки
        }, DEBOUNCE_DELAY);
    }
});

// Запуск наблюдателя по всему документу
observer.observe(document.body, { childList: true, subtree: true });

// Функция для получения данных качества с сервера
function fetchQualityData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', backend, true); // Используем переменную backend
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.responseText);
            callback(null, data.results); // Возвращаем массив результатов через коллбек
        } else {
            callback(new Error('Ошибка при получении данных качества'));
        }
    };
    xhr.onerror = function() {
        callback(new Error('Ошибка сети'));
    };
    xhr.send();
}

// Функция для получения данных качества, используя кэш
function getQualityData(callback) {
    var now = Date.now();

    // Проверяем, существует ли кэш и не устарел ли он
    if (qualityCache.data && qualityCache.timestamp && (now - qualityCache.timestamp < CACHE_EXPIRATION_TIME)) {
        callback(null, qualityCache.data); // Используем кэшированные данные
    } else {
        // Если кэш устарел или не существует, загружаем данные с сервера
        fetchQualityData(function(error, qualityData) {
            if (error) {
                callback(error);
            } else {
                // Сохраняем данные в кэш и обновляем таймстамп
                qualityCache.data = qualityData;
                qualityCache.timestamp = now;

                localStorage.setItem('qualityCache', JSON.stringify(qualityCache)); // Сохраняем в localStorage
                callback(null, qualityData);
            }
        });
    }
}

// Функция для преобразования массива qualityData в объект для быстрого поиска
function createQualityMap(qualityData) {
    var map = {};
    for (var i = 0; i < qualityData.length; i++) {
        map[qualityData[i].id] = qualityData[i];
    }
    return map;
}

// Функция для добавления качества к карточке
function addQualityToCard(card, matchedEntry) {
    var cardView = card.querySelector('.card__view');
    if (cardView && !cardView.querySelector('.card__quality')) {
        var qualityDiv = document.createElement('div');
        qualityDiv.classList.add('card__quality');

        var qualityInner = document.createElement('div');
        qualityInner.innerText = matchedEntry.qu; // Добавляем качество текста
        qualityDiv.appendChild(qualityInner);
        cardView.appendChild(qualityDiv);
    }
}

// Функция для обновления карточек
function updateCards(cards) {
    getQualityData(function(error, qualityData) {
        if (error) {
            console.error(error);
            return;
        }

        var qualityMap = createQualityMap(qualityData);

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card.hasAttribute('data-quality-added')) continue; // избегаем повторной обработки

            // Получаем id карточки
            var data = card.card_data; // Или используйте card.getAttribute('data-your-attribute') для получения данных
            if (data && data.id && !data.first_air_date) {
                var matchedEntry = qualityMap[data.id];

                if (matchedEntry) {
                    addQualityToCard(card, matchedEntry);
                    card.setAttribute('data-quality-added', 'true'); // Устанавливаем флаг, что качество добавлено
                }
            }
        }
    });
}
*/
/*
// Глобальные переменные
var backend = 'http://212.113.103.137:835/quality'; // Адрес запроса
var qualityCache = {
    data: null,
    timestamp: null
};
var CACHE_EXPIRATION_TIME = 3600000; // 1 час в миллисекундах

// Флаг для предотвращения многократного вызова updateCards
var isProcessing = false;

// Загрузка кэшированных данных из localStorage
var cachedQuality = localStorage.getItem('qualityCache');
if (cachedQuality) {
    qualityCache = JSON.parse(cachedQuality);
}

// Создание MutationObserver для отслеживания добавления новых карточек
var observer = new MutationObserver(function(mutations) {
    var newCards = [];

    mutations.forEach(function(mutation) {
        // Проверяем только добавленные узлы
        if (mutation.addedNodes.length) {
            for (var j = 0; j < mutation.addedNodes.length; j++) {
                var node = mutation.addedNodes[j];

                // Игнорируем неэлементные узлы
                if (node.nodeType !== 1) continue; // Node.ELEMENT_NODE равно 1 в ES5

                // Если это карточка, добавляем её
                if (node.matches('.card')) {
                    newCards.push(node);
                }

                // Ищем карточки внутри добавленного узла
                var cardsInNode = node.querySelectorAll('.card');
                for (var k = 0; k < cardsInNode.length; k++) {
                    newCards.push(cardsInNode[k]);
                }
            }
        }
    });

    // Обрабатываем новые карточки, если не выполняется обработка
    if (newCards.length && !isProcessing) {
        isProcessing = true;
        updateCards(newCards);
        isProcessing = false; // Сброс флага после обработки
    }
});

// Запуск наблюдателя по всему документу
observer.observe(document.body, { childList: true, subtree: true });

// Функция для получения данных качества с сервера
function fetchQualityData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', backend, true); // Используем переменную backend
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.responseText);
            callback(null, data.results); // Возвращаем массив результатов через коллбек
        } else {
            callback(new Error('Ошибка при получении данных качества'));
        }
    };
    xhr.onerror = function() {
        callback(new Error('Ошибка сети'));
    };
    xhr.send();
}

// Функция для получения данных качества, используя кэш
function getQualityData(callback) {
    var now = Date.now();

    // Проверяем, существует ли кэш и не устарел ли он
    if (qualityCache.data && qualityCache.timestamp && (now - qualityCache.timestamp < CACHE_EXPIRATION_TIME)) {
        callback(null, qualityCache.data); // Используем кэшированные данные
    } else {
        // Если кэш устарел или не существует, загружаем данные с сервера
        fetchQualityData(function(error, qualityData) {
            if (error) {
                callback(error);
            } else {
                // Сохраняем данные в кэш и обновляем таймстамп
                qualityCache.data = qualityData;
                qualityCache.timestamp = now;
                localStorage.setItem('qualityCache', JSON.stringify(qualityCache)); // Сохраняем в localStorage
                callback(null, qualityData);
            }

        });
    }
}

// Функция для преобразования массива qualityData в объект для быстрого поиска
function createQualityMap(qualityData) {
    var map = {};
    for (var i = 0; i < qualityData.length; i++) {
        map[qualityData[i].id] = qualityData[i];
    }
    return map;
}

// Функция для добавления качества к карточке
function addQualityToCard(card, matchedEntry) {
    var cardView = card.querySelector('.card__view');
    if (cardView && !cardView.querySelector('.card__quality')) {
        var qualityDiv = document.createElement('div');
        qualityDiv.classList.add('card__quality');

        var qualityInner = document.createElement('div');
        qualityInner.innerText = matchedEntry.qu; // Добавляем качество текста
        qualityDiv.appendChild(qualityInner);
        cardView.appendChild(qualityDiv);
    }
}

// Функция для обновления карточек
function updateCards(cards) {
    getQualityData(function(error, qualityData) {
        if (error) {
            console.error(error);
            return;
        }

        var qualityMap = createQualityMap(qualityData);

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card.hasAttribute('data-quality-added')) continue; // избегаем повторной обработки

            // Получаем id карточки
            var data = card.card_data; // Или используйте card.getAttribute('data-your-attribute') для получения данных
            if (data && data.id && !data.first_air_date) {
                var matchedEntry = qualityMap[data.id];

                if (matchedEntry) {
                    addQualityToCard(card, matchedEntry);
                    card.setAttribute('data-quality-added', 'true'); // Устанавливаем флаг, что качество добавлено
                }
            }
        }
    });
}

// Обработка события от Lampa.Listener
Lampa.Listener.follow('full', function(a) {
    if (a.type === 'complite') {
        var render = a.object.activity.render();

        if (a.object.method == 'tv') {
            return;
        }

        var card_id = a.object.card.id;

        // Получаем качество карточки по ID
        getQualityData(function(error, qualityData) {
            if (error) {
                console.error(error);
                return;
            }

            // Создаем объект для быстрого поиска
            var qualityMap = createQualityMap(qualityData);
            var matchedEntry = qualityMap[card_id];

            if (matchedEntry) {
                var qualityText = matchedEntry.qu; // Получаем текст качества

                // Добавляем отметку о качестве
                if (window.innerWidth > 585 && !$('.full-start-new.cardify').length) {
                    $('.full-start__poster,.full-start-new__poster', render).append(
                        "<div class='card--quality' style='right: -0.6em!important;position: absolute;background: #ffe216;color: #000;bottom:20.6em!important;padding: 0.4em 0.6em;font-size: 1em;border-radius: 0.3em;'>" + qualityText + "</div>"
                    );
                } else {
                    if ($('.card--quality', render).length) {
                        $('.full-start__tags', render).append(
                            '<div class="full-start__tag card--quality"><img src="./img/icons/menu/quality.svg" style="width:16px;height:16px;margin-right:4px;vertical-align:middle;"/> <div>' + qualityText + '</div></div>'
                        );
                    } else {
                        $('.full-start-new__details', render).append(
                            '<span class="full-start-new__split">●</span><div class="card--quality"><div>' + 'Качество: ' + qualityText + '</div></div>'

                        );
                    }
                }
            }
        });
    }
});*/
/*
// Глобальные переменные
var backend = 'http://212.113.103.137:835/quality'; // Адрес запроса
var qualityCache = {
    data: null,
    timestamp: null
};
var CACHE_EXPIRATION_TIME = 3600000; // 1 час в миллисекундах
var observer; // Объявляем переменную для наблюдателя

// Загрузка кэшированных данных из localStorage
var cachedQuality = localStorage.getItem('qualityCache');
if (cachedQuality) {
    qualityCache = JSON.parse(cachedQuality);
}

// Функция для получения данных качества с сервера
function fetchQualityData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', backend, true); // Используем переменную backend
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.responseText);
            callback(null, data.results); // Возвращаем массив результатов через коллбек
        } else {
            callback(new Error('Ошибка при получении данных качества'));
        }
    };
    xhr.onerror = function() {
        callback(new Error('Ошибка сети'));
    };
    xhr.send();
}

// Функция для обновления карточек
function updateCards(cards) {
    getQualityData(function(error, qualityData) {
        if (error) {
            console.error(error);
            return;
        }

        var qualityMap = createQualityMap(qualityData);

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var data = card.card_data; // Или используйте card.getAttribute('data-your-attribute') для получения данных

            // Проверяем, есть ли id у карточки
            if (data && data.id) {
                var matchedEntry = qualityMap[data.id];

                // Если качество обновилось или карточка не была обработана
                if (matchedEntry) {
                    addQualityToCard(card, matchedEntry);
                }
            }
        }
    });
}

// Функция для получения данных качества, используя кэш
function getQualityData(callback) {
    var now = Date.now();

    // Проверяем, существует ли кэш и не устарел ли он
    if (qualityCache.data && qualityCache.timestamp && (now - qualityCache.timestamp < CACHE_EXPIRATION_TIME)) {
        callback(null, qualityCache.data); // Используем кэшированные данные
    } else {
        // Если кэш устарел или не существует, загружаем данные с сервера
        fetchQualityData(function(error, qualityData) {
            if (error) {
                callback(error);
            } else {
                // Сохраняем данные в кэш и обновляем таймстамп
                qualityCache.data = qualityData;
                qualityCache.timestamp = now;
                localStorage.setItem('qualityCache', JSON.stringify(qualityCache)); // Сохраняем в localStorage
                callback(null, qualityData);
            }
        });
    }
}

// Функция для создания мапы качества
function createQualityMap(qualityData) {
    var map = {};
    for (var i = 0; i < qualityData.length; i++) {
        map[qualityData[i].id] = qualityData[i];
    }
    return map;
}


// Функция для добавления качества к карточке
function addQualityToCard(card, matchedEntry) {
    var cardView = card.querySelector('.card__view');
    if (cardView && !cardView.querySelector('.card__quality')) {
        var qualityDiv = document.createElement('div');
        qualityDiv.classList.add('card__quality');

        var qualityInner = document.createElement('div');
        qualityInner.innerText = matchedEntry.qu; // Добавляем качество текста
        qualityDiv.appendChild(qualityInner);
        cardView.appendChild(qualityDiv);
    }
}

// Создание и запуск MutationObserver
function initializeObserver() {
    var newCards = [];
    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (var j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла
                    var cardsInNode = node.querySelectorAll('.card');
                    for (var k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        });

        // Обрабатываем новые карточки
        if (newCards.length) {
            updateCards(newCards);
            newCards = []; // Сбрасываем массив
        }
    });

    // Запуск наблюдателя по всему документу
    observer.observe(document.body, { childList: true, subtree: true });
}


// Запуск приложения
if (!cachedQuality) {
    // Первый запуск, загружаем данные
    initializeObserver();
} else {
    // Если кэш уже существует, загружаем карточки из кэша
    var allCards = document.querySelectorAll('.card');
    updateCards(allCards);
}

// Один раз обновляем качество после загрузки из локального хранилища
setTimeout(function() {
    var allCards = document.querySelectorAll('.card');
    updateCards(allCards);
    disconnectObserver(); // Отключаем наблюдатель после первого обновления
}, 500); // 500 мс задержки перед обновлением

// Отключение наблюдателя
function disconnectObserver() {
    if (observer) {
        observer.disconnect(); // Отключаем наблюдатель, чтобы не нагружать систему
    }
}

// Обработка события от Lampa.Listener
Lampa.Listener.follow('full', function(a) {
    if (a.type === 'complite') {
        var render = a.object.activity.render();

        if (a.object.method == 'tv') {
            return;
        }

        var card_id = a.object.card.id;

        // Получаем качество карточки по ID
        getQualityData(function(error, qualityData) {
            if (error) {
                console.error(error);
                return;
            }

            // Создаем объект для быстрого поиска
            var qualityMap = createQualityMap(qualityData);
            var matchedEntry = qualityMap[card_id];

            if (matchedEntry) {
                var qualityText = matchedEntry.qu; // Получаем текст качества

                // Добавляем отметку о качестве
                if (window.innerWidth > 585 && !$('.full-start-new.cardify').length) {
                    $('.full-start__poster,.full-start-new__poster', render).append(

                        "<div class='card--quality' style='right: -0.6em!important;position: absolute;background: #ffe216;color: #000;bottom:20.6em!important;padding: 0.4em 0.6em;font-size: 1em;border-radius: 0.3em;'>" + qualityText + "</div>"
                    );
                } else {
                    if ($('.card--quality', render).length) {
                        $('.full-start__tags', render).append(
                            '<div class="full-start__tag card--quality"><img src="./img/icons/menu/quality.svg" style="width:16px;height:16px;margin-right:4px;vertical-align:middle;"/> <div>' + qualityText + '</div></div>'
                        );
                    } else {
                        $('.full-start-new__details', render).append(
                            '<span class="full-start-new__split">●</span><div class="card--quality"><div>' + 'Качество: ' + qualityText + '</div></div>'
                        );
                    }
                }
            }
        });
    }
});
*/
/*
// Глобальные переменные
var backend = 'http://212.113.103.137:835/quality'; // Адрес запроса
var qualityCache = {
    data: null,
    timestamp: null
};
var CACHE_EXPIRATION_TIME = 3600000; // 1 час в миллисекундах
var observer; // Объявляем переменную для наблюдателя

// Загрузка кэшированных данных из localStorage
var cachedQuality = localStorage.getItem('qualityCache');
if (cachedQuality) {
    qualityCache = JSON.parse(cachedQuality);
}

// Функция для получения данных качества с сервера
function fetchQualityData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', backend, true); // Используем переменную backend
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.responseText);
            callback(null, data.results); // Возвращаем массив результатов через коллбек
        } else {
            callback(new Error('Ошибка при получении данных качества'));
        }
    };
    xhr.onerror = function() {
        callback(new Error('Ошибка сети'));
    };
    xhr.send();
}

// Функция для обновления карточек
function updateCards(cards) {
    getQualityData(function(error, qualityData) {
        if (error) {
            console.error(error);
            return;
        }

        var qualityMap = createQualityMap(qualityData);

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var data = card.card_data; // Или используйте card.getAttribute('data-your-attribute') для получения данных

            // Проверяем, есть ли id у карточки
            if (data && data.id) {
                var matchedEntry = qualityMap[data.id];

                // Если качество обновилось или карточка не была обработана
                if (matchedEntry) {
                    addQualityToCard(card, matchedEntry);
                }
            }
        }
    });
}

// Функция для получения данных качества, используя кэш
function getQualityData(callback) {
    var now = Date.now();

    // Проверяем, существует ли кэш и не устарел ли он
    if (qualityCache.data && qualityCache.timestamp && (now - qualityCache.timestamp < CACHE_EXPIRATION_TIME)) {
        callback(null, qualityCache.data); // Используем кэшированные данные
    } else {
        // Если кэш устарел или не существует, загружаем данные с сервера
        fetchQualityData(function(error, qualityData) {
            if (error) {
                callback(error);
            } else {
                // Сохраняем данные в кэш и обновляем таймстамп
                qualityCache.data = qualityData;
                qualityCache.timestamp = now;
                localStorage.setItem('qualityCache', JSON.stringify(qualityCache)); // Сохраняем в localStorage
                callback(null, qualityData);
            }
        });
    }
}

// Функция для создания мапы качества
function createQualityMap(qualityData) {
    var map = {};
    for (var i = 0; i < qualityData.length; i++) {
        map[qualityData[i].id] = qualityData[i];
    }
    return map;
}

// Функция для добавления качества к карточке
function addQualityToCard(card, matchedEntry) {
    var cardView = card.querySelector('.card__view');
    if (cardView && !cardView.querySelector('.card__quality')) {
        var qualityDiv = document.createElement('div');
        qualityDiv.classList.add('card__quality');

        var qualityInner = document.createElement('div');
        qualityInner.innerText = matchedEntry.qu; // Добавляем качество текста
        qualityDiv.appendChild(qualityInner);
        cardView.appendChild(qualityDiv);
    }
}

// Создание и запуск MutationObserver
function initializeObserver() {
    var newCards = [];
    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (var j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла
                    var cardsInNode = node.querySelectorAll('.card');
                    for (var k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        });

        // Обрабатываем новые карточки
        if (newCards.length) {
            updateCards(newCards);
            newCards = []; // Сбрасываем массив
        }
    });

    // Запуск наблюдателя по всему документу
    observer.observe(document.body, { childList: true, subtree: true });
}

// Запуск приложения
initializeObserver(); // Инициализируем наблюдатель

// Один раз обновляем качество через 500 мс после загрузки из локального хранилища
setTimeout(function() {
    var allCards = document.querySelectorAll('.card');
    updateCards(allCards); // обновляем карточки из кэша
}, 500); // 500 мс задержки перед обновлением

// Обработка события от Lampa.Listener
Lampa.Listener.follow('full', function(a) {
    if (a.type === 'complite') {
        var render = a.object.activity.render();

        if (a.object.method == 'tv') {
            return;
        }

        var card_id = a.object.card.id;

        // Получаем качество карточки по ID
        getQualityData(function(error, qualityData) {
            if (error) {
                console.error(error);
                return;
            }

            // Создаем объект для быстрого поиска
            var qualityMap = createQualityMap(qualityData);
            var matchedEntry = qualityMap[card_id];

            if (matchedEntry) {
                var qualityText = matchedEntry.qu; // Получаем текст качества

                // Добавляем отметку о качестве
                if (window.innerWidth > 585 && !$('.full-start-new.cardify').length) {
                    $('.full-start__poster,.full-start-new__poster', render).append(
                        "<div class='card--quality' style='right: -0.6em!important;position: absolute;background: #ffe216;color: #000;bottom:20.6em!important;padding: 0.4em 0.6em;font-size: 1em;border-radius: 0.3em;'>" + qualityText + "</div>"
                    );
                } else {
                    if ($('.card--quality', render).length) {
                        $('.full-start__tags', render).append(
                            '<div class="full-start__tag card--quality"><img src="./img/icons/menu/quality.svg" style="width:16px;height:16px;margin-right:4px;vertical-align:middle;"/> <div>' + qualityText + '</div></div>'
                        );
                    } else {
                        $('.full-start-new__details', render).append(

                            '<span class="full-start-new__split">●</span><div class="card--quality"><div>' + 'Качество: ' + qualityText + '</div></div>'
                        );
                    }
                }
            }
        });
    }
});*/

// Глобальные переменные
var backend = 'http://212.113.103.137:835/quality'; // Адрес запроса
var qualityCache = {
    data: null,
    timestamp: null
};
var CACHE_EXPIRATION_TIME = 3600000; // 1 час в миллисекундах
var observer; // Переменная для хранения наблюдателя

// Функция для получения данных качества с сервера
function fetchQualityData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', backend, true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.responseText);
            callback(null, data.results); // Возвращаем массив результатов через коллбек
        } else {
            callback(new Error('Ошибка при получении данных качества'));
        }
    };
    xhr.onerror = function() {
        callback(new Error('Ошибка сети'));
    };
    xhr.send();
}

// Функция для обновления карточек
function updateCards(cards) {
    var qualityMap = createQualityMap(qualityCache.data); // Используем данные в кэше

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var data = card.card_data; // Или используйте card.getAttribute('data-your-attribute') для получения данных

        // Проверяем, есть ли id у карточки
        if (data && data.id) {
            var matchedEntry = qualityMap[data.id];

            // Если карточка содержит качество, добавляем его к карточке
            if (matchedEntry) {
                addQualityToCard(card, matchedEntry);
            }
        }
    }
}

// Функция для создания мапы качества
function createQualityMap(qualityData) {
    var map = {};
    for (var i = 0; i < qualityData.length; i++) {
        map[qualityData[i].id] = qualityData[i];
    }
    return map;
}

// Функция для добавления качества к карточке
function addQualityToCard(card, matchedEntry) {
    var cardView = card.querySelector('.card__view');
    if (cardView && !cardView.querySelector('.card__quality')) {
        var qualityDiv = document.createElement('div');
        qualityDiv.classList.add('card__quality');

        var qualityInner = document.createElement('div');
        qualityInner.innerText = matchedEntry.qu; // Добавляем качество текста
        qualityDiv.appendChild(qualityInner);
        cardView.appendChild(qualityDiv);
    }
}

// Создание и запуск MutationObserver
/* *★*******************
function initializeObserver() {
    var newCards = [];
    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (var j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла

                    var cardsInNode = node.querySelectorAll('.card');
                    for (var k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        });

        // Обрабатываем новые карточки
        if (newCards.length) {
            updateCards(newCards);
            newCards = []; // Сбрасываем массив для следующего цикла
        }
    });

    // Запуск наблюдателя по всему документу
    observer.observe(document.body, { childList: true, subtree: true });
}**************/

/*function initializeObserver() {
    var newCards = [];
    var isUpdating = false; // Флаг для проверки, выполняется ли обновление

    observer = new MutationObserver(function(mutations) {
        var i, j, k;

        for (i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];

            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла
                    var cardsInNode = node.getElementsByClassName('card');
                    for (k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        }

        // Запланируем обновление, если оно еще не запланировано
        if (!isUpdating) {
            isUpdating = true; // Устанавливаем флаг

            requestAnimationFrame(function() {
                if (newCards.length) {
                    updateCards(newCards);
                    newCards = [];
                }
                isUpdating = false; // Сбрасываем флаг после обновления
            });
        }
    });

    // Запуск наблюдателя на всем документе
    observer.observe(document.body, { childList: true, subtree: true });
}*/

function initializeObserver() {
    var newCards = [];
    var timer;

    observer = new MutationObserver(function(mutations) {
        var i, j, k;

        for (i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];

            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла
                    var cardsInNode = node.getElementsByClassName('card');
                    for (k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        }

        // Дебаунс обработчика обновления карточек
        clearTimeout(timer);
        timer = setTimeout(function() {
            if (newCards.length) {
                updateCards(newCards);
                newCards = [];
            }
        }, 200); // Задержка 200 мс
    });

    // Запуск наблюдателя на всем документе
    observer.observe(document.body, { childList: true, subtree: true });
}
/*
function initializeObserver() {
    var debounceDelay = 100; // Задержка дебаунса в миллисекундах (можно изменить по необходимости)
    var newCards = [];
    var timer;
    var isUpdating = false; // Флаг для отслеживания статуса обновления

    var observer = new MutationObserver(function(mutations) {
        var i, j, k;

        for (i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];

            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла
                    var cardsInNode = node.getElementsByClassName('card');
                    for (k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        }

        // Дебаунс обработчика обновления карточек
        clearTimeout(timer);

        // Запланируем обновление через requestAnimationFrame
        if (!isUpdating) {
            isUpdating = true; // Устанавливаем флаг
            timer = setTimeout(function() {
                // Обновляем карточки, если новые были добавлены
                if (newCards.length) {
                    updateCards(newCards);
                    newCards = [];
                }
                isUpdating = false; // Сбрасываем флаг после обновления
            }, debounceDelay); // Используем переменную задержки
        }
    });

    // Запуск наблюдателя на всем документе
    observer.observe(document.body, { childList: true, subtree: true });
}*/

/*function initializeObserver() {
    var newCards = [];
    var timer;

    observer = new MutationObserver(function(mutations) {
        var i, j, k;

        for (i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];

            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла
                    var cardsInNode = node.getElementsByClassName('card');
                    for (k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        }

        // Дебаунс обработчика обновления карточек
        clearTimeout(timer);
        timer = setTimeout(function() {
            if (newCards.length) {
                processCardsInBatches(newCards, 10); // Обрабатываем карточки партиями по 10
                newCards = [];
            }
        }, 100); // Задержка 100 мс
    });

    // Запуск наблюдателя на всем документе
    observer.observe(document.body, { childList: true, subtree: true });
}

// Функция для обработки карточек партиями
function processCardsInBatches(cards, batchSize) {
    let index = 0;

    function processBatch() {
        const end = Math.min(index + batchSize, cards.length);
        const batch = cards.slice(index, end);
        updateCards(batch); // Обновляем только часть карточек

        index += batchSize;
        if (index < cards.length) {
            setTimeout(processBatch, 0); // Обрабатываем следующую партию
        }
    }

    processBatch(); // Запуск обработки первой партии
}*/
/*
function initializeObserver() {
    var newCards = [];
    var timer;
    
    observer = new MutationObserver(function(mutations) {
        var i, j, k;

        for (i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];

            // Проверяем только добавленные узлы
            if (mutation.addedNodes.length) {
                for (j = 0; j < mutation.addedNodes.length; j++) {
                    var node = mutation.addedNodes[j];

                    // Игнорируем неэлементные узлы
                    if (node.nodeType !== 1) continue;

                    // Если это карточка, добавляем её
                    if (node.matches('.card')) {
                        newCards.push(node);
                    }

                    // Ищем карточки внутри добавленного узла
                    var cardsInNode = node.getElementsByClassName('card');
                    for (k = 0; k < cardsInNode.length; k++) {
                        newCards.push(cardsInNode[k]);
                    }
                }
            }
        }

        // Дебаунс обработчика обновления карточек
        clearTimeout(timer);
        timer = setTimeout(function() {
            if (newCards.length) {
                processCardsInBatches(newCards, 10); // Обрабатываем карточки партиями по 10
                newCards = [];
            }
        }, 100); // Задержка 100 мс
    });

    // Запуск наблюдателя на всем документе
    observer.observe(document.body, { childList: true, subtree: true });
}

// Функция для обработки карточек партиями
function processCardsInBatches(cards, batchSize) {
    var index = 0; // Используем var для обеспечения совместимости с ES5

    function processBatch() {
        var end = Math.min(index + batchSize, cards.length);
        var batch = cards.slice(index, end);
        updateCards(batch); // Обновляем только часть карточек

        index += batchSize; // Увеличиваем индекс для обработки следующей партии
        if (index < cards.length) {
            setTimeout(processBatch, 0); // Обрабатываем следующую партию
        }
    }

    processBatch(); // Запуск обработки первой партии
}*/

// Запуск приложения
initializeObserver(); // Инициализация наблюдателя

// Проверяем наличие данных в localStorage
var cachedQuality = localStorage.getItem('qualityCache');
if (cachedQuality) {
    qualityCache = JSON.parse(cachedQuality);
    // Загружаем карточки из локального хранилища сразу
    var allCards = document.querySelectorAll('.card');
    updateCards(allCards);
} else {
    // Если данных нет в локальном хранилище, запрашиваем их
    fetchQualityData(function(error, qualityData) {
        if (!error) {
            qualityCache.data = qualityData; // Сохраняем данные в кэш
            qualityCache.timestamp = Date.now(); // Устанавливаем временную метку
            localStorage.setItem('qualityCache', JSON.stringify(qualityCache)); // Сохраняем в localStorage

            // Обновляем карточки с новыми данными
            var allCards = document.querySelectorAll('.card');
            updateCards(allCards);
        }
    });
}

// Проверка и обновление данных через 1000 мс
setTimeout(function() {
    var now = Date.now();
    if (qualityCache.timestamp && (now - qualityCache.timestamp >= CACHE_EXPIRATION_TIME)) {
        // Если данные устарели, запрашиваем новые данные с сервера
        fetchQualityData(function(error, qualityData) {
            if (!error) {
                qualityCache.data = qualityData; // Сохраняем обновленные данные в кэш
                qualityCache.timestamp = now; // Обновляем временную метку
                localStorage.setItem('qualityCache', JSON.stringify(qualityCache)); // Сохраняем в localStorage

                // Обновляем карточки с новыми данными
                var allCards = document.querySelectorAll('.card');
                updateCards(allCards);
            }
        });
    }
}, 1000); // 1000 мс задержки перед проверкой и обновлением

// Обработка события от Lampa.Listener
Lampa.Listener.follow('full', function(a) {
    if (a.type === 'complite') {
        var render = a.object.activity.render();

        if (a.object.method == 'tv') {
            return;
        }

        var card_id = a.object.card.id;

        // Получаем качество карточки по ID
        if (qualityCache.data) {
            var qualityMap = createQualityMap(qualityCache.data);
            var matchedEntry = qualityMap[card_id];

            if (matchedEntry) {
                var qualityText = matchedEntry.qu; // Получаем текст качества

                // Добавляем отметку о качестве
                if (window.innerWidth > 585 && !$('.full-start-new.cardify').length) {
                    $('.full-start__poster,.full-start-new__poster', render).append(
                        "<div class='card--quality' style='right: -0.6em!important;position: absolute;background: #ffe216;color: #000;bottom:20.6em!important;padding: 0.4em 0.6em;font-size: 1em;border-radius: 0.3em;'>" + qualityText + "</div>"
                    );
                } else {
                    if ($('.card--quality', render).length) {
                        $('.full-start__tags', render).append(

                            '<div class="full-start__tag card--quality"><img src="./img/icons/menu/quality.svg" style="width:16px;height:16px;margin-right:4px;vertical-align:middle;"/> <div>' + qualityText + '</div></div>'
                        );
                    } else {
                        $('.full-start-new__details', render).append(
                            '<span class="full-start-new__split">●</span><div class="card--quality"><div>' + 'Качество: ' + qualityText + '</div></div>'
                        );
                    }
                }
            }
        }
    }
});

}

if (window.appready) my_qual();
       else {
           Lampa.Listener.follow('app', function(e) {
               if (e.type == 'ready') {
                  my_qual();
               }
            });
        }

})();