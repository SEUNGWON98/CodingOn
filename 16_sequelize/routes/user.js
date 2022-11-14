// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 기본주소 : localhost:PORT/user

// /user/
router.get("/", controller.main);

//GET/user/signup
router.get("/signup", controller.signup);

//POST/user/signup
router.post("/signup", controller.post_signup);

router.get("/signin", controller.signin);

router.post("/signin", controller.post_signin);

router.post("/profile", controller.post_profile);

router.post("/profile/edit", controller.edit);

router.post("/profile/delete", controller.delete);

//GET/user/signin
module.exports = router;
