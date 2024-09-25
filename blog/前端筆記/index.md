---
sidebar_position: 1
---


### 編寫環境

前端框架 vue.js (使用 vue 3 + vite) <br/>
前端介面 Bootstrap 5 <br/>
使用工具 vs code <br/>

### 參考教學

- [vue.js 官方文檔](https://vuejs.org/ "vue.js ")
- [bilibili教學](https://www.bilibili.com/video/BV1Zy4y1K7SH/?spm_id_from=333.337.search-card.all.click&vd_source=f0c9d3f6d9c0d45df80a3c142daaf74b)
- [重新認識 Vue.js](https://book.vue.tw/)
- [iT邦幫忙](https://ithelp.ithome.com.tw/articles/10213562)


------------

# Vite

### 初始化

```bash
# 使用 npm 安裝
npm init vue@latest
```

<img src="/assets/viteinit.png" alt="vite_init" />

### 執行 server

```bash
# step 1 先 install node_modules
npm i

# step 2 執行 server
npm run dev
```
------------

# Bootstrap 5

### bootstrap 5 安裝
```bash
# 使用 npm 安裝
npm install bootstrap
```
> ##### TIP
> 使用 bootstrap 建議一併引入 Sass <br/>
{: .block-tip }

```bash
# 使用 npm 安裝
npm install -D sass
```

### 在專案中使用 bootstrap

在 main.js 中引入
```js
// 注意先後順序
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
```

在要使用 bootstrap 樣式的地方去官網 (ctrl + c) + (ctrl + v) :D
```html
<!-- 例如 引入一個導航欄 -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
```
