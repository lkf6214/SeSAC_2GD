// ========================여기부턴 배열 method
let arr1 = [1, 2, 3, 4, 5];
arr1.push("six");
arr1.push("seven");
console.log(arr1);

arr1.pop();
console.log(arr1.pop());
console.log(arr1);

let arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.unshift("고양이");
arr2.unshift("쥐");
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

arr2[5] = "기린";
arr2[1] = "쿼카";
arr2[7] = "cat";
console.log(arr2);

arr2 = ["quakka", "puppy", "rabbit", "hamster"];
/* 배열.includes(요소) 
배열에 요소가 있는지 검사! -> true || false 반환*/
console.log(arr2.includes("puppy"));
console.log(arr2.includes("cat"));

console.log(arr2.length);
console.log(arr2.indexOf("puppy"));

arr1 = [1, 2, 3, 4, 5];
// reverse 기존의 배열 변경시킴, 배열의 순서뒤집어주는 메소드
arr1.reverse(); //[5,4,3,2,1]
console.log(arr1);

// join :배열을 문자열로
let str3 = arr1.join("-"); //"54321"
console.log(str3);

/* 반복 */
let arr3 = [6, 7, 8, 9, 10];
let alphabets = ["a", "b", "c", "d", "e", "f"];
console.log(alphabets[1]);
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

/* forEach 메소드 
배열.forEach(function(요소,인덱스,배열)){})
배열.forEach((value, index, array)=>{})
*/
console.log("arr3.forEach(function (number, index, arr) ");
arr3.forEach(function (number, index, arr) {
  console.log(number); // 배열안에 있는 요소,
  console.log(index); // 배열의 순서
  console.log(arr);
});

arr3.forEach(function (alphabet, i, arr) {
  console.log(alphabet);
  console.log(i);
  console.log(arr);
});

// map, filter, find
// 1. map >> 배열 내의 모든 원소에 대해 함수 호출한 결과를 모아서 새로운 배열 반환
// 2. filter >> 조건을 만족하는 요소들을 찾아서 '배열'로 반환
// 3. find >> 조건을 만족하는 요소 중 첫번째 '값'을 반환함

// 매개변수로 익명함수 (함수표현식, 화살표함수)
// 배열 자체를 변경시켜주지 않기 때문에 새로운 변수에 저장해서 사용!

/* map */
// [].map(function(value, index, arr){})
let arr4 = [1, 2, 3, 4, 5];
arr4.map(function (num) {
  return num * 2;
});

console.log(arr4);

const multiArr = arr4.map(function (el) {
  return el * 2;
});
console.log(multiArr); // 2, 4, 6, 8, 10

/* filter */
arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.filter(function (el) {
  return el.length >= 6;
});
console.log(arr2);

// filter는 전부를 보여줌
let six = arr2.filter(function (el) {
  return el.length >= 6;
});
console.log(six);

/* find */
// find는 조건 맨 앞에있는 것만 보여줌
let findResult = multiArr.find(function (el) {
  return el > 7;
});
console.log(findResult);

/* 화살표 함수 */
// 중괄호를 쓰지 않아도 됨!
// 중괄호를 쓰지 않았을 때는 return이 필요 없음!
let findResult2 = multiArr.find((el) => el > 7);
console.log(findResult2);

// 화살표함수로 바꾸려면, {} 안써도 됨. {}안쓰면 return 안써도 됨

// for in
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

for (let area in areaNum) {
  console.log(area); //key 값 나오는 것
  // 방법1. areaNum.Seoul
  // 방법2. areaNum["Seoul"] -> 대괄호 접근법 이용해서 Value에 접근
  console.log(areaNum[area]);
}
