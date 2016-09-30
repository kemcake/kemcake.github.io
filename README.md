# React Simple app #

A really simple and clean react app to get started

## What's inside ?
- Webpack
- Babel
- [React transform boilerplate](https://github.com/gaearon/react-transform-boilerplate)
   - Hot reloading
   - Error catching
- Sass or Less
- [Eslint](http://eslint.org/)
- [React Router](https://github.com/rackt/react-router)

## Setup

### Install npm project dependencies
```
npm install
```

#### Run locally

```
npm run start
```

It will setup a server with live reload on `localhost:3000`. Live reloading is for both javascript and styles.

#### Run linter

```
npm run lint
```

Will output eventually code mistakes

#### Build the code

```
npm run build
```

This code will bundle both `javascript` and `styles` to `dist/` folder, generating an `index.html` which will point to a `bundle.js` and `bundle.css`.
