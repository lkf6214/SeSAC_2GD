// 전개 연산자 사용해보기
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["새", "싹", "강", "동"];
console.log(arr1);
console.log(arr2);

for (let el of arr1) {
  console.log(el);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log(...arr1);
console.log(...arr2);
console.log(...[2, 3, 4]);

// concat 이용해서 합치기
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, "arr1 arr2사이에 추가한 요소", ...arr2];

console.log(arr3);
console.log(arr4);

// 1-2. 문자열에 접근해보기
// split 말고 [...str] 사용할 수 있다. 비슷함. []이게 더 간단!
const str = "alliehigh";
let strToArr = str.split("");
let strToArr2 = [...str];

console.log(strToArr);
console.log(strToArr2);
console.log(str);

for (let el of str) {
  console.log(el); //문자열도 배열처럼 접근 가능
}

// 1-3.오브젝트에 전개연산자 사용해보기
let me1 = {
  name: "지현",
  height: 158,
  married: false,
  friends: null,
};

let me2 = {
  name: "JH",
  like: ["지현", "놀기"],

  friends: {
    name: "지현",
    hate: ["손톱 바짝 깎기", "큰 소리 내기"],
  },
  greeting: function () {
    console.log(`안녕 내이름은 ${this.name}이고 키는 ${this.height}cm 입니다`);
  },
};
let me = {
  ...me1,
  ...me2,
  gender: "F",
};

console.log(me);
console.log(me.name);
me.greeting();

console.log("---실습---");
const word1 = "abc";
const word2 = "xyz";
// ["a", "b", "c", "d", "e", "f"];
const wordArr = [...word1, ...word2];
const wordArr2 = (word1 + word2).split("");
const wordArr3 = word1.split("").concat(word2.split(""));

console.log(wordArr);
console.log(wordArr2);
console.log(wordArr3);

//2.구조분해할당
//2-1. 배열의 구조 분해 할당

const arr5 = ["강동", "새싹", "캠퍼스"];
const [val1, val2, val3] = arr5;
console.log(val1);
// const val1 = arr5[0];
// const val2 = arr5[1];
// const val3 = arr5[2];

// const arr6 = [빨, 주, , 노];
// const [v1, v2, v3 = "default", v4, v5 = "green"] = arr6;
// console.log(노);
// console.log(v5);

// 변수 교환
console.log("--변수 교환--");
let value1 = "second";
let value2 = "first";

let temp;
temp = value1;
value1 = value2;
value2 = temp;
console.log(value1, value2);

// 구조분해 할당을 이용해서 교환하기
value1 = "second";
value2 = "first"[(value1, value2)] = [value2, value1];
console.log(value1, value2);

//오브젝트의 구조 분해 할당
let obj = {
  title: "제목",
  content: "내용",
  num: 0,
};
console.log(obj.title);
console.log(obj["title"]);
// console.log(title);not defined

const { num, content, title } = obj;
console.log(num);
console.log(content);
console.log(title);
// const { t1, t2, t3 } = obj;
// console.log(t2); // key와 다른 이름으로 할당되면 undefined

// key와 다른 이름으로 할당하는 방법
const { title: t2, content: c2, num: n2 } = obj;
console.log(t2);

const { key5, key2, ...obj2 } = {
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};
console.log(key2, key5);
console.log(obj2);

//매개변수로 전개연산자로
function test(...val) {
  const [a, b, c, ...rest] = val;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}
test(1, 2, 3, 4, 5, 6, 7, 8, 9);

// 매개변수가 몇개 들어오든지 합쳐주는 함수
// 주광 pick
// function addNumber(...a) {
//   return a.reduce((cur, prev) => {
//     console.log(cur, prev);
//     return cur + prev;
//   }, 0);
// }
// console.log(addNumber(1, 2, 3, 4, 5));

function addNumber(...a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
}
console.log(addNumber(1, 2, 3, 4, 5));
