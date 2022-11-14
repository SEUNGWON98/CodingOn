// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "0928",
  database: "kdt",
});

//회원가입 정보 입력
exports.signup = (data, cb) => {
  let sql = `INSERT INTO user VALUES ('${data.id}', '${data.name}', '${data.userid}', '${data.pw}');`;

  conn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(data.id);
  });
};

// //로그인 정보 읽기
// exports.select = ( id, password, cb ) => {
//     var sql = `SELECT * FROM user WHERE id='${id}' limit 1`;

//     cnn.query(sql, (err, rows) => {
//         if ( err ) throw err;
//         cb( rows[0] );
//     });
// }

// exports.getLogins = (callback) => {
//   conn.query("SELECT * FROM user", (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log("User.js", rows); // [ {}, {}, {}, {} ]
//     callback(rows);
//   });
// };

// exports.getLogin = (id, pw, callback) => {
//   conn.query(`SELECT * FROM user WHERE id=${id}, pw =${pw}`, (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log("User.js", rows); // [ {} ]
//     callback(rows[0]);
//   });
// };

// exports.postLogin = (data, callback) => {
//   conn.query(
//     `INSERT INTO user (name, comment) VALUES('${data.name}', '${data.comment}')`,
//     (err, rows) => {
//       if (err) {
//         throw err;
//       }

//       console.log("User.js", rows);
//       callback(rows.insertId); // pk (id)
//     }
//   );
// };
