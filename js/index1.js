console.log("연결확인");

// 변수
// -var
//     - 중복선언(재선언)이 가능하다.
//     - 따라서 예기치 못한 값을 반환할 수 있다.
// - let
//     - 중복선언은 불가능 하지만, 재할당은 가능하다
// - const
//     - 중복선언(재선언)과 재할당 모두 불가능하다
//     - 선언과 동시에 초기화를 해야한다.

// var
// var name = 홍길동;
// var name = 나비;
// console.log(name);

// let
// let name = "홍길동";
// let name = "나비";
// console.log(name);

// const
// const name = "홍길동";
// const name = "나비";
// console.log(name);

// const

const b = 1;
// b = 12; 재선언 불가

let q = 10;
q - 5;
q = q - 5;

console.log(q);

// 연산자
// 산술연산자 : + - *
// 대입연산자 : =
// 비교 연산자 : == === != !== < > <= >=
// 논리 연산자: !(not) &&(and) ||(or)

console.log("비교연산자");
console.log(1 == 1);
console.log(1 == "1");
console.log(1 != 1);
console.log(1 != "1");
console.log(1 !== "1");
console.log(1 === "1");

// 크기비교
// > < <= >=
console.log("크기비교");
console.log(1 + 1);
console.log(5 - 1);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);

// 논리연산
console.log("논리연산자");
console.log(!true);
console.log(!!true);
console.log(true || true);
console.log(true || true || false);
console.log(true && true);
console.log(false && true);
console.log((2 > 1 && -2 < 1) || 5 > 2);
console.log(1 > 2 || (2 > 1 && -2 < 1));

console.log("" == "0");
console.log(false == "hi");

// 오류나는 것. 신경쓰지 말아라
console.log("비교연산자");

console.log("0" == false);
console.log("0" == 0);
console.log("" == 0);
console.log(undefined == null);

// 함수 선언문
// function 함수이름(매개변수) {
//     함수내용
// }
// 함수 이름은 camelCase로 작성할 것

function helloWorld() {
  console.log("hello world");
}
helloWorld();

console.log("----");

function helloWorld1() {
  console.log("hello world1");
}
helloWorld1();

console.log("----");

function helloWorld2() {
  return "hello World2";
}
console.log(helloWorld2());
console.log("----");

// !!!!!!! 잘 모르겠다
function add(num1, num2) {
  console.log(num1 + num2);
}

function add2(num1 = 3, num2 = 2) {
  console.log("여기만 실행되요");
  console.log(num1 + num2);
  return num1 + num2;
  console.log(`여기는 실행되지 않아요. return 뒤에 작성되었기 때문이죠`);
}

// add(5, 10);
add2(3, 2);
let val = add2(3, 2);
console.log("add(3,2) >>", val);

// helloWorld3();
//밑에 쓴 helloWorld3()을 위에 쓰면 안됨. 왜냐면 함수표현식은 선언이후에 호출해 주어야하기 때문에

// 3
// 함수표현식
const helloWorld3 = function () {
  console.log("hello world3");
};
helloWorld3();

// 4
const helloWorld4 = () => {
  return "hello world4";
};
console.log(helloWorld4());

// 화살표 함수 == 함수표현식 같다!!!!
// 따라서 선언한 후 아래에 호출해야됨. 선언 위에 호출하면 안됨

// #####매개변수가 있는 함수
function sayHello(name) {
  return "안녕하세요" + name + "님";
  return `안녕하세요 ${name} 님`;
}
console.log(sayHello("지현"));

// 어렵네 이거
function sayHello2(text, name) {
  console.log(`${text}!! ${name} 님`);
}
let 안녕 = "안녕하세요";
sayHello2(안녕, "지현");

// #######
const bark = function (dogName) {
  console.log("bark!!!!!");
};
bark();
// ####### 화살표 함수로
const bark2 = () => {
  console.log("bark!!!!!");
};
bark2();

// 화살표 함수로 ??????????????????????????
const sayHello3 = (hi, you) => {
  console.log(`${hi}! ${you}! `);
  return "안녕" + "당신";
  //   매개 변수가 몇개든 return 값에 "안녕" + "당신"을 직접 넣어주었기 때문에 console.log(sayHello3())에 안녕당신이 뜨는 것임
};
console.log(sayHello3());
sayHello3("hi", "you");

// 실습1
console.log("----실습1 화살표함수----");
// 화살표함수
const multifly = (num1, num2) => {
  return num1 * num2;
};
console.log(multifly(3, 7)); //21;
console.log(multifly(2, 2)); //4;

//함수 선언문
console.log("-- 실습1 함수선언문 --");
function multifly1(num1, num2) {
  return num1 * num2;
}
console.log(multifly1(3, 7));
console.log(multifly1(2, 2));

// 실습2
console.log("----실습2 화살표함수----");
const square = (num) => {
  return num ** 2;
};
console.log(square(4)); //16;
console.log(square(11)); //121;
console.log(square(5)); //25;

//함수 선언문
function square1(num) {
  console.log(num ** 2);
}
console.log("-- 실습2 함수선언문 --");
square1(4); // 16
square1(11); // 121
square1(5); // 25

// return 이 값이다. console.log는 그냥 콘솔창에 띄우는 것일 뿐.
