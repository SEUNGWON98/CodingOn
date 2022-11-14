// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

//User 정보 저장하기
exports.signup = (req, res) => {
  User.signup(req.body, (result) => {
    res.send({
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    });
  });
};


