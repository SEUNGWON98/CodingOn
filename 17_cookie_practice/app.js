const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8090;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(cookieParser()); // req.cookies 가능해짐

const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 60 * 60 * 1000,
};

app.get("/", (req, res) => {
  res.render("index", { popup: req.cookies.popup });
});

app.post("/setCookie", (req, res) => {
  res.cookie("popup", "hide", cookieConfig);
  res.send("쿠키 설정완료");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
