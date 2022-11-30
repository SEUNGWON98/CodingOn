// 클래스
// -객체를 생성하는 템플릿
// 클래스: 붕어빵 틀
// 객체: 붕어빵

class Cat {
  // 생성자
  constructor(name, age) {
    // 속성
    this.name = name;
    this.age = age;
  }
  //   메서드
  mew() {
    console.log("야옹");
  }

  eat() {
    console.log("밥먹자");
  }
}

let navi = new Cat("나비", 2);
let nyang = new Cat("냥이", 3);

console.log(navi.name);
console.log(navi.age);
console.log(navi.mew());
console.log(navi.eat());

console.log(nyang.name);
console.log(nyang.age);
console.log(nyang.mew());
console.log(nyang.eat());

// 연습
// Person 클래스
// -속성: 이름, 성별
// - 메서드: study()
// Person 클래스로 만들어진 객체
// - minji
// - minsu

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  study() {
    console.log("공부하자");
  }
}

let minsu = new Person("minsu", "male");
let minji = new Person("minji", "female");

console.log(minsu.name);
console.log(minsu.gender);
minsu.study();

console.log(minji.name);
console.log(minji.gender);
minji.study();
