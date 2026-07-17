# Tech Context - Плодовка

## Технологии

### Frontend
- **HTML5** - структура страницы
- **Tailwind CSS 3.x** (CDN) - utility-first CSS фреймворк
- **Vanilla JavaScript** (ES6+) - логика без фреймворков
- **Google Fonts** - Inter (основной), Playfair Display (заголовки)

### Библиотеки (CDN)
- **PapaParse 5.4.1** - парсинг CSV файлов
- **Tailwind CSS** - стилизация через CDN

### Хостинг и деплой
- **GitHub Pages** - статический хостинг
- **Git** - контроль версий
- **Репозиторий:** https://github.com/Vputewestvie/Plodovka

### Внешние сервисы
- **Google Таблицы** - источник данных (ассортимент товаров)
- **Авито** - платформа для оформления заказов
- **СДЭК / Почта России** - доставка

## Development Setup

### Локальная разработка
```bash
# Клонирование репозитория
git clone https://github.com/Vputewestvie/Plodovka.git
cd Plodovka

# Редактирование index.html
code index.html

# Просмотр в браузере
# Открыть index.html напрямую или через Live Server
```

### Структура проекта
```
Plodovka/
├── index.html          # Основной файл (всё включено)
├── manifest.json       # PWA манифест
├── sw.js              # Service Worker
├── robots.txt         # SEO
├── sitemap.xml        # SEO
├── images.jfif        # Превью изображение
├── sheet.csv          # Локальная копия данных (для разработки)
├── test.csv           # Тестовые данные
├── package.json       # Метаданные проекта
├── package-lock.json  # Зависимости
├── node_modules/      # Зависимости (если нужны)
└── memory-bank/       # Документация проекта
    ├── projectbrief.md
    ├── productContext.md
    ├── activeContext.md
    ├── systemPatterns.md
    ├── techContext.md
    └── progress.md
```

### Workflow
1. Редактирование index.html локально
2. Тестирование в браузере
3. Git commit + push
4. GitHub Pages автоматически деплоит

## Технические ограничения

### Жёсткие ограничения
- **Один HTML файл** - весь код в index.html (для простоты деплоя)
- **Нет сборки** - нет Webpack, Vite, Gulp
- **Нет фреймворков** - нет React, Vue, Angular
- **CDN зависимости** - Tailwind, PapaParse загружаются из сети
- **Google Таблица** - должен быть публичный доступ для CSV

### Ограничения GitHub Pages
- Только статический контент (HTML, CSS, JS)
- Нет серверного кода
- Лимит 1GB на репозиторий
- Лимит 100GB трафика/месяц

### Ограничения браузера
- LocalStorage ~5-10MB
- Clipboard API требует HTTPS (есть на GitHub Pages)
- Service Worker работает только на HTTPS (или localhost)

## Зависимости

### Production (CDN)
- Tailwind CSS 3.x - https://cdn.tailwindcss.com
- PapaParse 5.4.1 - https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js
- Google Fonts - Inter + Playfair Display

### Development (опционально)
- Node.js/npm - для package.json (не обязательно)
- Git - для деплоя

### Внешние API
- Google Sheets API (непрямой, через CSV экспорт)
- Clipboard API (браузерный)
- Intersection Observer API (браузерный)

## Конфигурация

### Переменные в коде
```javascript
const sheetCsvUrl = "https://docs.google.com/spreadsheets/d/1-0S3n227q-louVVKXTdOOGLvEONiLnBNSxdKit--sJk/export?format=csv&gid=0";
const avitoProfileUrl = "https://www.avito.ru/brands/i202143646?src=sharing";
```

### Google Таблица - структура
Обязательные колонки:
- `Наименование` - название товара
- `Группа` - категория (жимолость, смородина и т.д.)
- `Цена` - цена в рублях
- `На_складе` - количество на складе
- `Фото1` - URL фото (можно несколько через пробел/запятую)
- `Фото2` - дополнительное фото (опционально)
- `Видео` - URL видео (опционально)

### PWA конфигурация
- manifest.json - название, иконки, тема
- sw.js - кэширование для офлайн-режима
- theme-color: #047857

## Безопасность

### HTTPS
- GitHub Pages предоставляет HTTPS автоматически
- Нет mixed content (все ресурсы через HTTPS)

### Данные
- Нет чувствительных данных в коде
- Google Таблица публичная (только ассортимент)
- Нет авторизации/аутентификации

### XSS защита
- Данные из CSV не экранируются специально
- Используется textContent/innerText для пользовательских данных
- innerHTML используется только для статического контента

## Производительность

### Текущие метрики
- Размер index.html: ~130KB (включая весь код)
- Внешние ресурсы: ~500KB (Tailwind, PapaParse, шрифты)
- Время загрузки: 1-2 секунды (зависит от интернета)

### Оптимизации
- Lazy loading для изображений (loading="lazy")
- Skeleton loading для товаров
- Кэширование темы в localStorage
- Service Worker для офлайн-режима

### Что можно улучшить
- Оптимизировать изображения (WebP, сжатие)
- Preload критических шрифтов
- Минифицировать CSS/JS (сейчас не минифицировано)
- Добавить кэширование данных в localStorage

## Совместимость

### Браузеры
- Chrome/Edge 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Мобильные браузеры ✓

### API поддержка
- Intersection Observer - все современные браузеры
- Clipboard API - все современные браузеры (требует HTTPS)
- Service Worker - все современные браузеры
- CSS Grid + Flexbox - все современные браузеры

## Мониторинг и отладка

### Текущее состояние
- Console.log для отладки
- Обработка ошибок CSV (alert)
- Нет аналитики

### Планы
- Добавить Яндекс.Метрику
- Добавить Google Analytics
- Отслеживание ошибок (Sentry)
- Мониторинг доступности (UptimeRobot)

## Деплой

### Процесс деплоя
1. Изменения в index.html
2. `git add index.html`
3. `git commit -m "описание"`
4. `git push`
5. GitHub Pages автоматически обновляет сайт (1-2 минуты)

### Rollback
```bash
git revert HEAD
git push
```

### Переменные окружения
- Нет .env файлов
- Все конфигурация в коде (URL, ссылки)