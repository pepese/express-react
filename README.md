# express-react

<!-- description -->
いまさら React やってみる。

## 環境設定

node だと common-js になるので、仕方なく Babel 入れて import/export できるようにする。

```bash
$ npm i -D webpack webpack-cli webpack-dev-server terser-webpack-plugin
$ npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
$ npm i -S react react-dom
$ touch webpack.config.js
```

一応 Linter 。

```bash
$ npm i -D eslint eslint-plugin-react
$ touch .eslintrc.js
```

SSR もやる予定なので Express 。

```bash
$ npm i -S express
```

## 参考

- [公式(ja)](https://ja.reactjs.org/)
- [Reactコンポーネントへの理解を深める](https://codezine.jp/article/detail/9928)