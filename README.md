# aids-protection-node

基于 Koa + TypeScript + sequelize + MySQL 的 预防艾滋病宣传 的小程序后端

适合 Node.js 或 Typescript 初学者学习使用

## 使用方法

- 克隆

  `git clone git@github.com:ZimTang/aids-protection-node.git`

- 安装

  `npm install`

- 在项目根目录下创建.env 文件

  ```.env
  // 数据库主机
  DATABASE_HOST = 'localhost'
  // 数据库名
  DATABASE_DB = 'aidsprotection'
  // 数据库类型
  DATABASE_DIALECT = 'mysql'
  // 数据库用户
  DATABASE_USER = 'root'
  // 数据库密码
  DATABASE_PASSWORD = '123456'
  // 连接池最大连接数
  DATABASE_POOP_MAX = 5
  // 连接池最小连接数
  DATABASE_POOL_MIN = 0
  DATABASE_POOL_ACQUIRE = 30000
  DATABASE_POOL_IDLE = 100000
  // 开启服务的端口
  PORT = 3000
  ```

- 创建对应名称的数据库
- 使用 openssl 生成一对私钥和公钥

  ```shell
  openssl

  > genrsa -out private.key 1024
  > rsa -in private.key -pubout -out public.key
  ```

- 将生成的`private.key`和`public.key`放在`src/app/keys`文件夹下
- 运行

  `npm run dev`

## 主要功能

- [x] 用户请求
- [x] 问题请求
- [x] 回答请求
- [x] 评论请求
- [x] 咨询医生
- [x] 知识竞赛
- [x] 积分系统

## 在线文档

[红丝带小卫士](https://www.apifox.cn/apidoc/shared-0ed5faa7-187b-4cc4-ae59-8ae68d76e88e/api-17410691)
