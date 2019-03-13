# A-Frame Meetup NYC - Demo files 00_A-Frame_starter  

[**Download the package here**](https://rawgit.com/roland-dubois/aframe-meetup-nyc/master/demos/00_A-Frame_starter.zip)

Check if you have node installed: `node -v`

Check if you have npm installed: `npm -v`

If not, install from [nodejs.org](https://nodejs.org/)


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

### Stop Dev Server

`ctrl + c`
