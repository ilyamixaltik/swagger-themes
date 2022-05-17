# Swagger themes

## Library documentation language:
  * [EN](#english)
  * [RU](#russian)

## Installation
### npm
```bash
npm i swagger-themes
```
### yarn
```bash
yarn add swagger-themes
```

## English
## Example usage
### JavaScript
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

### TypeScript
```js
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { SwaggerTheme } from 'swagger-themes';
import swaggerDocument from './swagger.json';

const app = express();
const theme = new SwaggerTheme('v3');

const options = {
  explorer: true,
  customCss: theme.getBuffer('dark')
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
```

## Russian
## Установка
### npm
```bash
npm i swagger-themes
```
### yarn
```bash
yarn add swagger-themes
```

## Пример использования
### JavaScript
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

### TypeScript
```js
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { SwaggerTheme } from 'swagger-themes';
import swaggerDocument from './swagger.json';

const app = express();
const theme = new SwaggerTheme('v3');

const options = {
  explorer: true,
  customCss: theme.getBuffer('dark')
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
```

**My contacts:**
  * [VK](https://vk.com/ilya_mixaltik)
  * [Telegram](https://t.me/ilya_mixaltik)