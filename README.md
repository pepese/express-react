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
- [チュートリアル：Reactの導入](https://ja.reactjs.org/tutorial/tutorial.html)
- [Example: Todo List · Redux](https://redux.js.org/basics/example)
- [Reduxの基本 ~ 公式ドキュメント Basics~](https://qiita.com/kazmaw/items/9fb069c551d33a7c1c84)
- [基礎からはじめるReact入門](https://codezine.jp/article/corner/688)
  - とりあえず、これさらっとみるか？
- [Reduxの処理の流れ](https://qiita.com/takahiron/items/9c2156a8efbd2ea98246)
- [console だけでわかる Redux 前編　~store/action/reducer 編~](https://qiita.com/KONDO-Yuuki/items/357abff3fe327cf473b9)
- [React Redux の SPA を運用して得られた知見と実装例、開発フローもあるよ！](https://qiita.com/numanomanu/items/af97312f34cf1388cee6)
  - まだよくわからんが、実践的でよくまとまっている！
- [React(+Redux)+gRPCで実現するクリーンアーキテクチャ＋マイクロサービス構成](https://qiita.com/teradonburi/items/ec18e6517afbc8b6b6e2)
- [React-Reduxが分からない人のためにReact-ReduxのAPIを全部説明する](https://qiita.com/tkow/items/bca43546a98e42121873)
- [2018 年 React と Redux のエコシステム総まとめ](https://qiita.com/kotarella1110/items/e76bf9cca665157f3d2e)
- [create-react-appした後に入れるやつと諸々の設定ファイルたち](https://qiita.com/lidqqq/items/7d3f6bc42ebb5645cbd9)
- [最新版で学ぶwebpack 4入門 スタイルシート（CSSやSass）を取り込む方法](https://ics.media/entry/17376/)
- [フロントエンドの命名や設計の基本と自分の現在の設計](https://qiita.com/buchiya4th/items/127282088f5a9ad56152)