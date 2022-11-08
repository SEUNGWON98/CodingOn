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

async function exec() {
  let user = await name1("seo");
  console.log(user + "반가워");
  let hi = await back();
  console.log(hi + "을 실행");
  let msg = await hell(hi + "을 실행");
  console.log("여기는 " + msg);
}

exec();
