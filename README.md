# Swagger themes

## Library documentation language:
  * [EN](#english)
  * [RU](./docs/RU.md)
  * [UA](./docs/UA.md)

## Navigation
  * [Installation](#installation)
  * [Example usage](#example-usage)
  * [Two Swagger document](#two-swagger-document)
  * [Get default config](#get-default-config)
  * [Themes](#themes)
  * [Contacts](#my-contacts)

## English
> This library adds the ability to "painlessly" change your Swagger documentation theme.

## Installation
### npm
```bash
npm i swagger-themes
```
### yarn
```bash
yarn add swagger-themes
```

## Example usage
> Connecting and using the library
```js
const { SwaggerTheme } = require('swagger-themes');

const theme = new SwaggerTheme('v3'); // Specifying the Swagger Version
const darkStyle = theme.getBuffer('dark'); // Getting a Style
```

## Use with Express
### Standard Example
> Standard dark theme connection with Express. The connection takes place via the swagger-ui-express library
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

### Two Swagger document
> Connecting 2 documentation files. For example - 2 different themes are used
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

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV1)); // Dark theme documentation
app.use('/api-docs/v2', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV2)); // Classic theme documentation
```

### Get default config
> The method of getting the default config for the swagger library is ui-express
```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { SwaggerTheme } = require('swagger-themes');
const swaggerDocument = require('./swagger.json');

const app = express();
const theme = new SwaggerTheme('v3');

const optionsV1 = theme.getDefaultConfig('dark');
const optionsV2 = theme.getDefaultConfig('classic');

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV1)); // Dark theme documentation
app.use('/api-docs/v2', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsV2)); // Classic theme documentation
```

## Themes
> classic
![Classic](./screenshots/classic.jpeg)
> dark
![Dark](./screenshots/dark.jpeg)
> feeling-blue
![Feeling blue](./screenshots/feeling-blue.jpeg)
> flattop
![Flattop](./screenshots/flattop.jpeg)
> material
![Material](./screenshots/material.jpeg)
> monokai
![Monokai](./screenshots/monokai.jpeg)
> muted
![Muted](./screenshots/muted.jpeg)
> newspaper
![Newspaper](./screenshots/newspaper.jpeg)
> outline
![Outline](./screenshots/outline.jpeg)

## My contacts
  * [VK](https://vk.com/ilya_mixaltik)
  * [Telegram](https://t.me/ilya_mixaltik)
  * [GitHub](https://github.com/ilyamixaltik)

## Thanks to
- [Mark Ostrander](https://github.com/ostranme) - thanks for some styles
- [Stepan Petei](https://github.com/Stepan-Petei) - thank you for translating the documentation into Ukrainian

[License](https://github.com/ilyamixaltik/swagger-themes/blob/main/LICENSE.md)