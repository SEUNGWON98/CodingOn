// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);
router.get("/signup", controller.signup);
router.post("/signup", controller.signup);

module.exports = router;
