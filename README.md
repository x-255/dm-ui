# dm-ui

## 一个组件库 demo

### 推荐 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### VSCode 推荐插件

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### scripts

```sh
pnpm run dev # 启动开发环境
pnpm run build:lib # 打包组件库文件
pnpm run build:docs # 打包文档
pnpm run gen # 新建组件
pnpm run test # 运行jest测试
pnpm run format # 格式化重写所有文件
pnpm run lint # 运行 ESLint 校验
pnpm run lint:fix # 指示 ESLint 试图修复尽可能多的问题
```

### 整体目录结构

```sh
dm-ui
 ├── build # vite打包配置
 │   ├── docs.config.ts # 文档模式
 │   └── lib.config.ts # 组件库模式
 ├── scripts # 脚本
 │   ├── gen # 新建组件
 ├── public
 │   └── favicon.ico
 ├── demo # 文档源码
 │   ├── components # 文档组件
 │   ├── router # 路由配置
 │   ├── main.ts # 文档入口文件
 │   └── App.vue # 文档入口组件
 ├── src # 组件库源码
 │   ├── components.ts # 组件统一出口
 │   ├── index.ts # 组件库入口文件
 │   ├── list.json # 组件列表（组件库菜单就是根据这个生成的）
 │   ├── setup.ts # 全局安装所有组件的方法
 │   └── _utils # 各类工具
 ├── typings # 全局类型声明
 │   ├── global.d.ts
 │   ├── shims-vue.d.ts
 │   └── vite-env.d.ts
 ├── docs # 文档打包出口
 ├── lib # 组件库打包出口
 └── vite.config.ts # vite基础配置
```

### 单个组件目录结构

```sh
componentName
 ├── src # 组件源码
 │   └── index.vue
 ├── tests # 测试文件
 │   └── example.spec.ts
 ├── docs # 文档
 │   ├── demo.vue # 使用示例
 │   └── README.md # 文档主文件（vue路由通过找docs/README.md渲染到页面）
 └── index.ts # 组件统一出口
```
