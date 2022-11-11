//sequelize-cli 자동 생성한 파일
"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
// const a = require(__dirname + "/../config/config.json")
// const a = {
//   "development": {
//   "test": {},
//   "production": {},
//     "username": "root",
//     "password": "0928",
//     "database": "kdt",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
// }
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체 선언시 매개 변수로 정보들을 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelzie, Sequelize: Sequelize }

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// models/Visitor.js 정의한 model이 db.Visitor에 들어감
// db = { sequelize: sequlize, Sequelize: Sequlize, Visitor: ? }

module.exports = db;
// db 변수 내보냄 -> 다른 파일에서 사용하기 때문
