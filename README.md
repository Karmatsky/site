# Personal Site

## English

### Overview

I've built a modern, responsive personal portfolio website using React and TypeScript. This project showcases my professional online presence with sections about me, my projects, and contact information. The site features a clean design with smooth animations and full internationalization support.

### Features

My site includes:

- **Responsive Design**: Mobile-first approach with Tailwind CSS for beautiful, adaptive layouts
- **Dark Mode Support**: Built-in theme switching with next-themes for comfortable viewing
- **Internationalization**: Full i18n support with English and Russian translations
- **Smooth Animations**: Framer Motion integration for polished transitions and interactions
- **Contact Form**: React Hook Form with validation for reliable communication with visitors
- **UI Components**: Pre-built accessible components with Lucide React icons
- **Notifications**: Toast notifications powered by Sonner
- **Type-Safe**: Full TypeScript support for robust development

### Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite (fast development and production builds)
- **Internationalization**: i18next with automatic browser language detection
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Theme Management**: next-themes
- **Icons**: Lucide React

### Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form section
│   ├── Header.tsx      # Navigation header
│   ├── Projects.tsx    # Portfolio projects section
│   └── ui/             # Reusable UI components
│       ├── alert.tsx
│       └── sonner.tsx  # Toast notifications
├── i18n/               # Internationalization
│   ├── en.json        # English translations
│   ├── ru.json        # Russian translations
│   └── index.js       # i18n configuration
├── lib/
│   └── utils.ts       # Utility functions
├── App.tsx            # Main app component
├── main.tsx           # React entry point
└── index.css          # Global styles
```

### Getting Started

#### Prerequisites

- Node.js 16+ and npm/pnpm/yarn installed

#### Installation

To set up this project locally, follow these steps:

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will run at `http://localhost:5173`

#### Build for Production

When I'm ready to deploy, I run:

```bash
npm run build
```

This creates optimized production files in the `dist/` directory.

#### Preview Production Build

```bash
npm run preview
```

### Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build TypeScript and create production bundle
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

### Language Support

The site automatically detects the user's browser language and displays content in English or Russian. Users can manually switch between languages using the language selector in the header.

### Customization

I can easily customize this site:

- **Edit Content**: Modify component files in `src/components/` for my content
- **Translations**: Update translation files in `src/i18n/` (en.json and ru.json)
- **Styling**: Customize Tailwind CSS configuration in `tailwind.config.js`
- **Theme**: Configure light/dark mode in the Header component

### Deployment

I can deploy my site to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Simply push the contents of the `dist/` folder after building.

---

## Русский

### Описание

Я создал современное адаптивное личное портфолио, используя React и TypeScript. Проект демонстрирует моё профессиональное онлайн-присутствие с разделами обо мне, моих проектах и контактной информации. Сайт имеет чистый дизайн с плавными анимациями и полной поддержкой многоязычности.

### Возможности

Мой сайт включает:

- **Адаптивный дизайн**: Мобильный подход с Tailwind CSS для красивых и адаптивных макетов
- **Поддержка темного режима**: Встроенная смена темы с next-themes для комфортного просмотра
- **Интернационализация**: Полная поддержка i18n с переводами на английский и русский языки
- **Плавные анимации**: Интеграция Framer Motion для полированных переходов и взаимодействий
- **Контактная форма**: React Hook Form с валидацией для надежного взаимодействия посетителей
- **Компоненты пользовательского интерфейса**: Готовые доступные компоненты с иконками Lucide React
- **Уведомления**: Всплывающие уведомления от Sonner
- **Типобезопасность**: Полная поддержка TypeScript для надежной разработки

### Технологический стек

- **Фреймворк**: React 19
- **Язык**: TypeScript
- **Стилизация**: Tailwind CSS с пользовательскими анимациями
- **Инструмент сборки**: Vite (быстрая разработка и сборка для продакшена)
- **Интернационализация**: i18next с автоматическим определением языка браузера
- **Анимации**: Framer Motion
- **Обработка форм**: React Hook Form
- **Управление темой**: next-themes
- **Иконки**: Lucide React

### Структура проекта

```
src/
├── components/          # React компоненты
│   ├── About.tsx       # Раздел "О себе"
│   ├── Contact.tsx     # Раздел с контактной формой
│   ├── Header.tsx      # Навигационный заголовок
│   ├── Projects.tsx    # Раздел портфолио проектов
│   └── ui/             # Переиспользуемые компоненты интерфейса
│       ├── alert.tsx
│       └── sonner.tsx  # Всплывающие уведомления
├── i18n/               # Интернационализация
│   ├── en.json        # Переводы на английский
│   ├── ru.json        # Переводы на русский
│   └── index.js       # Конфигурация i18n
├── lib/
│   └── utils.ts       # Вспомогательные функции
├── App.tsx            # Главный компонент приложения
├── main.tsx           # Точка входа React
└── index.css          # Глобальные стили
```

### Начало работы

#### Требования

- Node.js версии 16+ и npm/pnpm/yarn

#### Установка

Чтобы установить этот проект локально, следуйте этим шагам:

```bash
# Клонируйте репозиторий
git clone <url-репозитория>

# Установите зависимости
npm install

# Запустите сервер разработки
npm run dev
```

Сервер разработки будет запущен на `http://localhost:5173`

#### Сборка для продакшена

Когда я готов развернуть сайт, я запускаю:

```bash
npm run build
```

Это создает оптимизированные файлы продакшена в папке `dist/`.

#### Просмотр сборки для продакшена

```bash
npm run preview
```

### Доступные скрипты

- `npm run dev` - Запустить сервер разработки с горячей перезагрузкой модулей
- `npm run build` - Собрать TypeScript и создать bundle для продакшена
- `npm run lint` - Запустить ESLint для проверки качества кода
- `npm run preview` - Просмотреть сборку для продакшена локально

### Поддержка языков

Сайт автоматически определяет язык браузера пользователя и отображает контент на английском или русском языке. Пользователи могут вручную переключаться между языками, используя переключатель языков в заголовке.

### Кастомизация

Я могу легко кастомизировать этот сайт:

- **Редактирование контента**: Изменяю файлы компонентов в `src/components/` для своего контента
- **Переводы**: Обновляю файлы переводов в `src/i18n/` (en.json и ru.json)
- **Стилизация**: Настраиваю конфигурацию Tailwind CSS в `tailwind.config.js`
- **Тема**: Настраиваю светлый/темный режим в компоненте Header

### Развертывание

Я могу развернуть свой сайт на любом сервисе статического хостинга:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Просто выкладываю содержимое папки `dist/` после сборки.
