---
layout: post
title: onAfterMessageAdd
tagline: CEvent::Send
date: 2017-05-27 15:37
categories: [Bitrix]
tags: [Graphic, Design, Photoshop, Wallpaper]
image: img-04.jpg
---
Компонент forum.topic.reviews – именно этот компонент отвечает за отзывы на товар, использует для хранения отзывов форум, специально отведенную ветку на форуме. Каждый раз, когда кто-то добавляет новый отзыв на товар, создается новая тема на форуме(если такой еще нет).

И в нее добавляется сообщение. Именно поэтому нам нужно событие “onAfterMessageAdd(Добавление нового сообщения на форум)”.
Обработчик события onAfterMessageAdd

Обработчик получился примерно такой:
<script src="https://gist.github.com/atoms183/41a1b69fc0dc08aae3d7c1058f9b8a6c.js"></script>

Создадим почтовое событие

Настройки->Почтовые события->Типы почтовых событий->Добавить тип
Тип: “NEW_ITEM_REVIEW”
Там же посмотрите ID этого события, оно вам нужно
<img src="http://jcover.ru/wp-content/uploads/2012/12/eventtype1.png" alt="альтернативный текст">

Создадим почтовый шаблон
Настройки->Почтовые события->Почтовые шаблоны->Добавить шаблон
<img src="http://jcover.ru/wp-content/uploads/2012/12/mailtemplate.png" alt="альтернативный текст">
Источник статьи http://jcover.ru/
