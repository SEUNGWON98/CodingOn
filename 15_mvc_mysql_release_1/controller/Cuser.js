// TODO: 컨트롤러 코드
const User = require("../model/User");
const router = require("../routes/user");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signup = (req, res) => {};


