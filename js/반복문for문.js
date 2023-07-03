for (let num = 13; num <= 10000; num += 13) {
  if (num % 2) console.log(num);
}

// 구구단 2단~9단
// 이중 FOR문 사용
for (let i = 2; i < 10; i++) {
  console.log(`----${i}단-----`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i}x${j} = ${i * j}`);
  }
}

console.log(`----while 1~5-----`);
// while
let n1 = 1; //while 내부에서 사용할 변수의 초기화
// while(조건) {
//     조건이 참일 떄 실행되는 문장
// }
while (n1 <= 5) {
  console.log(n1);
  n1++;
}

console.log(`----while 10~6 반대로-----`);
let n2 = 10;
while (n2 >= 6) {
  console.log(n2);
  n2--;
}

console.log(`----while과 if를 사용해서 2~10까지 짝수 출력-----`);
let n3 = 1;
while (n3 < 11) {
  if (n3 % 2 === 0) {
    console.log(n3);
  }
  n3++;
}

// while과 무한루프
console.log(`----while과 무한루프 break-----`);
let n4 = 1;
while (true) {
  console.log(n4);
  n4++;
  if (n4 === 11) {
    break;
  }
}

// confirm
// 확인 true반환
// 취소 false반환
// let n5 = 0;
// while (confirm("계속 진행하시겠습니까?")) {
//   n5++;
//   alert(n5 + "번째 alert");
// }

// continue
// 현재의 반복을 멈추고, 다음 반복 회차로 넘어감
// break
// 반복문에서 반복을 멈추고 즉시 탈출
// 1~10 홀수의 합 구하기
console.log(`----1~10 홀수의 합 구하기-----`);
let sum2 = 0;
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum2 = sum2 + i;
}
console.log(sum2);

console.log(`----실습 for문-----`);
// 2또는 5의 배수 총합 구하기
// let  i = 1;
let sum3 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    // console.log(i);
    sum3 = sum3 + i;
  }
}
// 확인을 하기 위해서는 for문을 벗어나고 콘솔 찍어야함
console.log(sum3);

// 위와 동일한 while문
// 2.while
console.log(`----실습 while문-----`);

let sum4 = 0;
let n6 = 0;
while (n6 < 101) {
  if (n6 % 2 === 0 || n6 % 5 === 0) {
    sum4 += n6;
  }
  n6++;
}
console.log(sum4);
