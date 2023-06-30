console.log("안녕하세요");
// alert("안녕하세요!");
// confirm("js 재밌지 않나요? 네니요..!");
// prompt("당신의 이름은?");
/* 1. 문자열 , String */
let myName = "지현";
let mycity = "서울";
console.log(myName);
// 내 이름은 지현이고요, 사는 곳은 서울이예요.
console.log("내 이름은", myName, "이고요, 사는 곳은", mycity, "이예요");
console.log("내 이름은 " + myName + "이고요, 사는 곳은 " + mycity + "이예요");
console.log(`내 이름은 ${myName}이고요, 사는 곳은 ${mycity}이예요`);
let myInfo1 = "내 이름은 " + myName + "이고요, 사는 곳은 " + mycity + "이예요";
let myInfo2 = `내 이름은 ${myName}이고요, 사는 곳은 ${mycity}이예요`;
// let myIfo3="내 이름은", myName, "이고요, 사는 곳은", mycity, "이예요"
// > 쉼표를 이용해서 문자열을 연결하는 것은 안됩니다!
console.log(myInfo1);
console.log(myInfo2);
/* 2. Number */
// 연산 가능
let num1 = 100;
let num2 = 3.14;
console.log(num1 + num2);
console.log(myName + num1); // 숫자와 문자열의 덧셈 = 숫자가 문자열 취급되어 연결됨
console.log(myName - num1); // 숫자와 문자열의 뺄샘 = NaN(Not a Number)
/* 3. Boolean */
let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);

// 4
let undef;
console.log(undef);

// 문자열이 아니라서 회색으로 뜸
let empty = null;
console.log(empty);

// 5. Array
let fruits = ["orange", "kiwi", "mango", "apple"];
let fruits1 = new Array("orange1", "kiwi1", "mango1", "apple1");
console.log(fruits);
console.log(fruits1);

console.log(fruits[0]);
console.log(fruits1[3]);

// 배열 안에 배열이 들어갈 수 있다
// 이차원 배열
let kr = [
  ["가", "나", "다"],
  ["a", "b", "c"],
  ["아", "오", "워"],
];

console.log(kr);
console.log(kr[0]);
console.log(kr[1]);
console.log(kr[2]);
console.log(kr[1][0]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);
console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

// 6. object 배열은 순서가 있는 반면에, 오브젝트는 키-값 형태로 저장된다. 키의 이름으로 접근한다.

let cat = {
  name: "나비",
  age: "1",
  isCute: true,
};

console.log(cat);
// 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
// 대괄호 표기법
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

cat.name = "딸랑이";
console.log(cat);
cat["gender"] = "f";
console.log(cat);
cat["parents"] = ["mom", "father"];
console.log(cat);

let introduction = {
  name: "지현",
  age: "27",
  city: "서울",
  like: "cookie",
};

console.log(introduction);
console.log(
  `내 이름은 ${introduction.name}이고요, 나이는 ${introduction.age}살이예요`
);
console.log();

console.log("-----typeof-----");
console.log(typeof "문자");
console.log(typeof 245);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
// not a number
console.log(typeof function () {});
// let likeNum = prompt("가장 좋아하는 숫자는?");
// console.log(likeNum);
// console.log(typeof likeNum);
// 프롬포트는 항상 string으로 받아옴. 숫자를 써도 문자로 받아옴
// console.log(likeNum + 10);
// 10을 입력했을 경우, 10+10인 "20"이 되는게 아니고, 혹은 "10+10"으로 나오는게 아니고 "1010"으로 뜸

// 명시적 형변환
// let likeNum1 = prompt("가장 좋아하는 숫자는? 숫자로 변환");
// likeNum1 = Number(likeNum1);
// console.log(likeNum1 + 10);

// 1. --> 문자
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());

// 2. >> 숫자
let n1 = true; //boolean
let n2 = false; //boolean
let n4 = "3.14"; //string

console.log(Number(n1)); //true -> 1
console.log(Number(n2)); //false -> 0

console.log(typeof Number(n4)); //3.14
console.log(Number(n4)); //3.14
console.log(typeof parseInt(n4));
console.log(parseInt(n4));
let n5 = parseInt(n4);

let test1 = "문자";
let test2 = 1234;
let test3 = true;
let test4 = ["a", "b", "c"];
let test5 = null;
let test6 = {
  name: "지현",
  age: "27",
  city: "서울",
  like: "cookie",
};

console.log(`"${typeof test2}" isn't "${typeof test1}" data type`);
console.log(
  `typeof 를 Array 이나 null에 사용하면, "${typeof null}" 결과를 얻을 수 있습니다.`
);
// Object는 Array(test4), null(test5), dictionary(test6)

let mathScore = prompt("수학 점수는?");
let engScore = prompt("영어 점수는?");
mathScore = Number(mathScore);
engScore = Number(engScore);
let total = (mathScore + engScore) / 2;
console.log(total);
