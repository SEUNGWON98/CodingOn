const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index", { title: "동적 폼 실습" });
};

exports.practice30 = (req, res) => {
  console.log(req.body);

  for (let i = 0; i < User.users().length; i++) {
    if (
      User.users()[i].realId === req.body.userId &&
      User.users()[i].realPw === req.body.userPw
    ) {
      return res.send({ userInfo: User.users()[i].name, isSuccess: true });
    }
  }
  res.send({ isSuccess: false });
};
