Для запуска проекта нужно выполнить следующие команды:
1. npm install - устанавливает все пакеты, перечисленные в pachage.json
2. npm start - запуск приложения на сервере

# Описание тестового задания: 

Реализовать следующий блок в соответствии с [макетом](https://www.figma.com/file/YXCbNT4Jf9INk62BKTZw1z/Тестовое-задание?node-id=0-1&t=YWsoW1c7xIPzb85L-0) 

Блок содержит информацию о временных отрезках, в каждом из которых существует несколько событий. 
При переключении временных отрезков изменяются соответствующие числа и под ними показывается новый слайдер, который содержит подробную информацию по ключевым событиям на активном временном отрезке.

Возможно существование от 2 до 6 временных отрезков. Все интерактивные точки на окружности располагаются на одинаковом расстоянии друг от друга

Весь блок стоит сделать независимым от другой логики на странице. 
Например, если добавить на страницу ещё один такой же блок, верстка и логика работы этих блоков не будет нарушена

## Требования к реализации

* Необходимо использовать Typescript
* Можно использовать React.js или нативный JS на Ваш выбор
* В случае использования нативного JS, можно воспользоваться любым удобным для Вас HTML-шаблонизатором или обычным HTML
* Стилизация с использованием SASS/SCSS (В случае работы с React.js, возможно использование styled-components)
* Сборка проекта с помощью Webpack
* Для работы со слайдерами необходимо использовать библиотеку Swiper
* Для реализации js-анимаций можно использовать библиотеку gsap

~~ Не использовать JQuery ~~
~~ Не использовать Bootstrap, Tailwind и т.п. ~~
~~ Не использовать библиотеки с готовыми UI-компонентами такие, как MaterialUI, AntDesign и т.п. ~~

