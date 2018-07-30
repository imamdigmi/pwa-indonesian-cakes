# Progressive Web App
This app is just for demo

## Prequesites
NodeJS >= 4

## Setup
Clone this repo
```bash
$ git clone https://github.com/imamdigmi/pwa-demo.git
```

Insetall Dependencies
```bash
$ sudo npm install --global gulp;
$ npm install
```

Run!
```bash
$ gulp serve
```

## Deployment

### Deploy to GitHub `gh-pages`
Ensure that this app has remote url to your repo
```bash
gulp deploy
```

### Deploy to Heroku
1. Create dist/server.js and put code below to that file
```javascript
const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const port = process.env.PORT || 3000;
const domain =  process.env.DOMAIN;

function ensureDomain(req, res, next) {
  if (!domain || req.hostname === domain) {
    // OK, continue
    return next();
  };

  // handle port numbers if you need non defaults
  res.redirect(`http://${domain}${req.url}`);
};

const app = express();

// at top of routing calls
app.all('*', ensureDomain);

app.use(compression());

// default to .html (you can omit the extension in the URL)
app.use(serveStatic(`${__dirname}/public`, {'extensions': ['html']}));

app.listen(port, () => {
  console.log('Server running...');
});
```

3. Create dist/package.json and put code below
```json
{
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "engines":{
    "node": ">=4"
  },
  "dependencies": {
    "compression": "^1.4.4",
    "express": "^4.12.3",
    "serve-static": "^1.9.2"
  }
}
```

4. Push the dist folder to Heroku
```bash
$ git init;
$ git add -A;
$ git commit -m "Deploy to heroku";
$ heroku create;
$ git push heroku master;
```

This app at least has some features of :
- [x] Offline
- [x] Service Worker
- [x] Fetch API
- [x] IndexDB
- [x] Add to Home Screen
- [x] Responsive Web Design