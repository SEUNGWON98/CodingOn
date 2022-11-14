// TODO: 라우트 설정
const express = require("express");
const router = express.Router();

// 기본주소 : localhost:PORT/user

// /user/
router.get("/", controller.index);

//GET/user/signup
router.get("/signup", controller.signup);

//POST/user/signup
router.get("singin", controller.signin);

//GET/user/signin
module.exports = router;