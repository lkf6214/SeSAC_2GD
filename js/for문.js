// for문
for (let i = 0; i < 10; i = i + 1) {
  console.log("안녕");
}

// 보통 쓰는 형태
for (let i = 0; i < 10; i++) {
  console.log("안녕");
}

// 잘 안쓰는 형태
for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1} 번째`);
}

// 1~5까지 출력
console.log("1~5까지 출력");
// 방법 1
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 방법 2
for (let i = 1; i < 6; i++) {
  console.log(i);
}
// 방법 3
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 5~0까지 줄어들기
console.log("5~0까지 줄어들기");
for (let i = 5; i > 0; i--) {
  console.log(i - 1);
}

// 1~ n 까지 더하는 프로그램 만들기
console.log(" 1~ n 까지 더하는 프로그램 ");
let n = 10;
let sum = 0;
// for (let i = 1; i <= n; i++) {}

// 배열과 for문 같이 쓰기
console.log("배열과 for문 같이 쓰기");
let apb = ["A", "B", "C", "D", "E"];
console.log(apb[0]);
console.log(apb[1]);
console.log(apb[2]);

for (let i = 0; i < apb.length; i++) {
  console.log(`i like ${apb[i]}`);
}

// 배열에 들어가 있는 Number형 데이터와 합 구하기
// let numArr = [100, 200, 99, 58, 77, 23];
// let numSum = 0;
// for (let i = 0; i < numArr.length; i++) {
//  sum = sum +
// }
