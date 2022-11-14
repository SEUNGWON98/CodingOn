// TODO: 컨트롤러 코드
// const { User } = require("../models");
const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signup = (req, res) => {
  // User.post_signup(req.body,() => {
  //   res.send
  // })
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then((result) => {
    console.log("post_signup >>", result);
    res.send(result);
  });
};

exports.post_signin = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log("findOne >>", result);

    if (result == null) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

// User.postProfile(req.body.userid, (result) => {
//   if (result.length > 0) {
//     res.render("profile", { data: result[0] });
//   } else {
//     res.redirect("/user/signin");
//   }
// });

exports.post_profile = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log(result); // [ {} ] ->

    console.log("dkdkdkdkdkdkdkdkdk", { data: result });
    if (result !== null) {
      res.render("profile", { data: result });
    }
  });
};

exports.edit = (req, res) => {
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    // console.log("update>>>>>>>>>>", result);
    res.send("회원정보 수정완료!");
  });
};

exports.delete = (req, res) => {
  models.User.destroy({
    where: {
      // userid: req.body.userid,
      // pw: req.body.pw,
      // name: req.body.name,

      id: req.body.id,
    },
  }).then((result) => {
    console.log("deleteeeeeeeeeeeeee", result);
    res.send("회원정보 삭제완료");
  });
};

//User 정보 저장하기
// exports.signup = (req, res) => {
//   User.signup(req.body, (result) => {
//     res.send({
//       userid: req.body.userid,
//       pw: req.body.pw,
//       name: req.body.name,
//     });
//   });
// };
