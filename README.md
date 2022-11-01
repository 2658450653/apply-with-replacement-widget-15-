# 配置说明

## 接口配置

文件：/src/api/index.ts 中配置请求

> getWidgetInfo 方法为获取附加问题的接口；

> submitFormInfo 方法为提交保存数据的接口（其中的接口返回类型也一并需要配置）；

# 开发环境：

## node.js 版本 14 +

```sh
npm install
npm run start
```

## npm install 安装错误

1、如果遇到 husky 错误：

> 将代码包放到没有 git 的目录中使用，因为整体代码包缺少项目 git commit 提交约束脚本；

2、如果遇到 puppeteer 错误：

> 更换代理或者手动安装 puppeteer。
