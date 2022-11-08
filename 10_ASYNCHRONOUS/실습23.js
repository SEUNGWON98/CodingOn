function name1(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 700);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 500);
  });
}

name1("seo") // add(4, 3) -> resolve(7) - then(7)
  .then(function (name) {
    console.log(name + "반가워"); // 7
    return back(name); // return mul(7) - resolve(14) -> then(14)
  })
  .then(function (result) {
    console.log(result + " 을 실행했구나"); // 14
    return hell(result); // return sub(14) -> resolve(13) -> then(13)
  })
  .then(function (result) {
    console.log("여기는 ", result); // 13
  });
