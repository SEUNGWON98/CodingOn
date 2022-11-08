const express = require("express");
const app = express();
const PORT = 8000;

const id = "seo";
const password = "1234";

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index", { title: "실습 풀이" });
});

app.get("/practice26", function (req, res) {
  res.render("practice26");
});

app.get("/practice27", function (req, res) {
  res.render("practice27");
});

app.get("/practice28", function (req, res) {
  res.render("practice28");
});

app.get("/practice29", function (req, res) {
  res.render("practice29");
});

app.get("/practice30", function (req, res) {
  res.render("practice30");
});

app.post("/axios2", function (req, res) {
  // res.render("practice30");
  // console.log(req.body);
  if ((req.body.id === id) & (req.body.password === password)) {
    let content = {
      txt: `${id}님! 로그인 성공!`,
      color: "blue",
    };
    res.send(content);
  } else {
    let content = {
      txt: "로그인에 실패하셨습니다",
      color: "red",
    };
    res.send(content);
  }
});

// app.post("/axios", function (req, res) {
//   console.log(req.body);
//   if (req.data.id == id && req.data.password == password) {
//     let content = {
//       txt: `${id}님! 로그인 성공!`,
//       color: "blue",
//     };
//     res.send(content);
//   } else {
//     let content = {
//       txt: "로그인에 실패하셨습니다",
//       color: "red",
//     };
//     res.send(content);
//   }
// });

// GET / axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// app.post('/seoPost', (req, res) => {
//   console.log(req.body);
//   // req.body:유저가 프론트에서 입력한 아이디/비번
//   // 진짜 아이디
// })

app.get("/result26", function (req, res) {
  console.log(req.query);
  res.render("result", {
    success: "실습26 폼 전송 완료!",
    userInfo: req.query,
  });
});

app.post("/result27", function (req, res) {
  console.log(req.body);
  res.render("result", {
    success: "실습27 폼 전송 완료!",
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
