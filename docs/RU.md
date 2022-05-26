# Swagger темы

## Язык документации библиотеки:
* [EN](../README.md)
* [RU](#russian)

## Навигация
* [Установка](#установка)
* [Примеры использования](#примеры-использования)
* [Два Swagger документа](#два-swagger-документа)
* [Получить конфиг по-умолчанию](#получить-конфиг-по-умолчанию)
* [Темы](#темы)
* [Контакты](#мои-контакты)

## Russian
> Данная библиотека добавляет возможность "без боли" изменять вашу тему документации Swagger.

## Установка
### npm
```bash
npm i swagger-themes
```
### yarn
```bash
yarn add swagger-themes
```

## Примеры использования
> Подключение и использование библиотеки
```js
const { SwaggerTheme } = require('swagger-themes');

const theme = new SwaggerTheme('v3'); // Указание версии Swagger
const darkStyle = theme.getBuffer('dark'); // Получение стиля
```

## Использование с Express
### Стандартный пример
> Стандартное подключение тёмной темы с Express. Подключение происходит через библиотеку swagger-ui-express
```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { SwaggerTheme } = require('swagger-themes');
const swaggerDocument = require('./swagger.json');

const app = express();
const theme = new SwaggerTheme('v3');

const options = {
  explorer: true,
  customCss: theme.getBuffer('dark')
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
```

### Два Swagger документа
> Подключение 2 файлов документации. Для примера - используется 2 разные темы
```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { SwaggerTheme } = require('swagger-themes');
const swaggerDocument = require('./swagger.json');

const app = express();
const theme = new SwaggerTheme('v3');

const optionsV1 = {
  explorer: true,
  customCss: theme.getBuffer('dark')
};
const optionsV2 = {
  explorer: true,
  customCss: theme.getBuffer('classic')
}

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV1)); // Тёмная тема документации
app.use('/api-docs/v2', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV2)); // Классическая тема документации
```

### Получить конфиг по-умолчанию
> Метод получения конфига по-умолчанию для библиотеки swagger-ui-express
```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { SwaggerTheme } = require('swagger-themes');
const swaggerDocument = require('./swagger.json');

const app = express();
const theme = new SwaggerTheme('v3');

const optionsV1 = theme.getDefaultConfig('dark');
const optionsV2 = theme.getDefaultConfig('classic');

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV1)); // Тёмная тема документации
app.use('/api-docs/v2', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV2)); // Классическая тема документации
```

## Темы
> classic
![Classic](../screenshots/classic.jpeg)
> dark
![Dark](../screenshots/dark.jpeg)
> muted
![Muted](./screenshots/muted.jpeg)
> outline
![Outline](../screenshots/outline.jpeg)
> newspaper
![Newspaper](../screenshots/newspaper.jpeg)
> monokai
![Monokai](./screenshots/monokai.jpeg)
> feeling-blue
![Feeling blue](./screenshots/feeling-blue.jpeg)

## Мои контакты
* [VK](https://vk.com/ilya_mixaltik)
* [Telegram](https://t.me/ilya_mixaltik)
* [GitHub](https://github.com/ilyamixaltik)

## Thanks to
- [Mark Ostrander](https://github.com/ostranme) - спасибо за несколько стилей

## License (MIT)

Copyright (c) [Илья Михальчик](https://github.com/ilyamixaltik)

Настоящим предоставляется бесплатное разрешение любому лицу, получающему копию этого программного обеспечения и связанных с ним файлов документации ("Программное обеспечение"), на использование Программного обеспечения без ограничений, включая, без ограничений, права на использование, копирование, изменение, объединение, публикацию, распространение, сублицензирование и/или продавать копии Программного обеспечения и разрешать лицам, которым предоставляется Программное обеспечение, делать это при соблюдении следующих условий:

Вышеуказанное уведомление об авторских правах и это уведомление о разрешении должны быть включены во все копии или существенные части Программного обеспечения.

ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ "КАК ЕСТЬ", БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ, ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ И ОТСУТСТВИЯ НАРУШЕНИЙ. НИ В КОЕМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА КАКИЕ-ЛИБО ПРЕТЕНЗИИ, УБЫТКИ ИЛИ ИНУЮ ОТВЕТСТВЕННОСТЬ, БУДЬ ТО В РЕЗУЛЬТАТЕ ДЕЙСТВИЯ ДОГОВОРА, ДЕЛИКТА ИЛИ ИНЫМ ОБРАЗОМ, ВЫТЕКАЮЩИЕ ИЗ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ В СВЯЗИ С НИМ ИЛИ ИСПОЛЬЗОВАНИЕМ ИЛИ ДРУГИМИ СДЕЛКАМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.