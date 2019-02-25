# cml-ui
本仓库为 `cml` 框架的扩展组件库，提供丰富的组件能力

详细见[cml扩展组件文档](https://cmljs.org/doc/component/expand/expand.html)

例如:
```html
<script cml-type="json">
{
  "base": {
      "usingComponents": {
        "c-dialog": "cml-ui/components/c-dialog/c-dialog"
      }
  }
}
</script>
```
### 1 如何开发
```javascript
npm install
cml dev  //开始开发
```
### 2 目录概述

```javascript
.
├── README.md
├── bin
│   └── build.sh
├── chameleon.config.js
├── dist
│   └── wx
│       ├── app.js
│       ├── app.json
│       ├── app.wxss
│       ├── components
│       ├── pages
│       ├── project.config.json
│       └── static
├── mock
│   ├── api
│   │   └── index.js
│   └── template
│       └── index.php
├── package  // build.sh 结果，发布到npm
│   ├── assets
│   │   ├── css
│   │   └── images
│   ├── components
│   │   ├── c-action-sheet
│   │   └── c-dialog
│   └── package.json
├── package-lock.json
├── package.json
└── src  //开发目录
    ├── app
    │   ├── app.cml
    │   └── app.interface
    ├── assets
    │   ├── css
    │   └── images
    ├── components //开发组件
    │   ├── c-action-sheet
    │   └── c-dialog
    ├── entry
    │   ├── entry.html
    │   ├── entry.web.js
    │   └── entry.weex.js
    ├── pages  //组件示例demo页
    │   ├── API // 相应api 接口demo示例
    │   ├── COMP //相应组件demo示例；
    │   └── index  //主页入口
    │
    ├── router.js
    ├── router.config.json //路由配置
    └── store
        ├── action-types.js
        ├── actions.js
        ├── getter-types.js
        ├── getters.js
        ├── index.js
        ├── mutation-types.js
        ├── mutations.js
        └── state.js

```
开发步骤
1. 查看index.cml文件，大概了解主页的配置和生效路径；
2. 配置：
    只需要在 router.config.json 中配置对应路由页面
3. 配置完毕之后 在 `src/pages/COMP`中书写你的demo组件
4. 当前以上的工作都是为了可以实时查看开发的组件的效果做准备，接下来就需要去`src/components`中去开发我们对应的组件
5. enjoy yourself


<!-- ### 4 多端预览效果
| web   |      微信小程序      |  native-weex |  百度小程序 |  支付宝小程序 |
|:----------:|:-------------:|:------:|:------:|:------:|
| <img src="./preview/web-1.jpg" width="200px"/> |  <img src="./preview/wx-1.jpg" width="200px"/>| <img src="./preview/weex-1.jpg" width="200px"/> |<img src="./preview/baidu-1.png" width="200px"/> |<img src="./preview/alipay-1.png" width="200px"/> | -->
