// (임시) DB로부터 회원정보를 받아옴
// exports.userInfo = () => {
//   return {
//     realId: "banana",
//     realPw: "4321",
//   };
// };

exports.users = () => {
  return [
    {
      realId: "apple",
      realPw: "1234",
      name: "사과사과",
    },
    {
      realId: "banana",
      realPw: "4321",
      name: "바나나나바바바나나나나",
    },
    {
      realId: "happy",
      realPw: "qwer1234",
      name: "해피",
    },
  ];
};
