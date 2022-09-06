# 项目初始化

## 添加 Eslint 与 Prettier

## Git 提交规范

```shell
pnpm add commitizen -D #
pnpm add cz-customizable -D # 插件
##################################
# 提交消息的规范配置
pnpm add -D commitlint
pnpm add -D husky
pnpm add -D @commitlint/cli @commitlint/config-conventional
npx husky install
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
# 提交代码规范 husky 与 Eslint结合

```

## 集成 VueRouter 与 Pinia

## 样式重置
