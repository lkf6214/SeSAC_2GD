// // if문
// if (5 > 3) {
//   console.log("참");
// }

// let number = Number(prompt("숫자를 입력하세요"));
// console.log(typeof number);

// if (조건1) {
//   // 조건 1 이 참일 때 실행
// } else if (조건2) {
//   //조건 1 이 거짓이고 , 조건 2 가 참일 때
// } else if (조건3) {
//   //조건 1 조건 2 가 거짓이고 , 조건 3 이 참일 때
// } else {
//   //조건 1 2 3 이 모두 거짓일 때 실행
// }

// // 예시 2
// if (number > 10) {
//   alert("10보다 큽니다");
// } else {
//   alert("10이거나 10보다 작습니다");
// }

// // 예시 1
// if (number > 10) {
//   console.log("10보다 큽니다");
// } else if (number === 10) {
//   console.log("입력한 수가 10이네요");
// } else {
//   console.log("10보다 작은 수");
// }

// // 성적 산출 프로그램
// if (number <= 100 && number >= 90) {
//   console.log("A");
// } else if (number >= 80) {
//   console.log("B");
// } else if (number >= 70) {
//   console.log("C");
// } else if (number >= 60) {
//   console.log("D");
// } else console.log("F");

// // if에서 이미 걸러졌기 때문에 else if 에서는 ~이상일때만 작성하고, ~이하는 작성하지 않음

// const age1 = Number(prompt("나이를 입력하세요"));
// console.log(typeof number);

// // let age1 = 28;
// if (age1 >= 20) {
//   console.log("성인");
// } else if (age1 >= 17) {
//   console.log("고등학생");
// } else if (age1 >= 14) {
//   console.log("중학생");
// } else if (age1 >= 8) {
//   console.log("초등학생");
// } else console.log("유아");

// const age = Number(prompt("나이를 입력하세요"));
// if (age >= 0 && age < 8) {
//   console.log("유아");
// } else if (age < 14) {
//   console.log("초등학생");
// } else if (age < 17) {
//   console.log("중학생");
// } else if (age < 20) {
//   console.log("고등학생");
// } else if (age < 150) {
//   console.log("성인");
// } else if (age >= 150) {
//   console.log("나이가 될 수 없습니다");
// } else {
//   console.log("음수값입니다");
// }

// /* if문 중첩 예제*/
// let userId = "user";
// let userPw = "1234!";

// function login() {
//   let inputId = prompt("아이디를 입력해주세요!");
//   if (userId === inputId) {
//     let inputPw = prompt("패스워드를 입력해 주세요!!");
//     if (userPw === inputPw) {
//       alert("로그인 성공!!");
//     } else {
//       alert("비밀번호가 틀렸습니다!");
//     }
//   } else {
//     alert("아이디가 틀렸어요!");
//   }
// }

// login();

// // switch//
// let a = 4;
// switch (값) {
//   case 1:
//     // 값이 1이라면 실행할 문장
//     break;
//   case "abcd":
//     // 값이 abcd이라면 실행할 문장
//     break;
//   default:
//     // 위의 case가 모두 일치하지 않을 때 실행할 문장
//     break;
// }

// // switch 잘 모르겠다!
// let b = 4;
// switch (b) {
//   case 3:
//     console.log("입력값이 4보다 작습니다");
//     break;
//   case 4:
//     console.log("입력값이 4입니다");
//     break;
//   case 5:
//     console.log("b는 5입니다");
//     break;
//   default:
//     console.log("3, 4, 5 가 아니네요");
//     break;
// }

let num = 7;
if (num % 2 == 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

// 삼항연산자
// 조건 ? (조건이 참일 때) 실행 1 : (조건이 거짓일때 ) 실행 2
let result = num % 2 === 1 ? "홀수" : "짝수";

console.log(result);

let now = new Date().getHours();
if (now < 12) {
  console.log("오전");
} else {
  console.log("오후");
}
console.log(now);

let now1 = new Date().getHours();
if (now1 >= 12) {
  console.log("오후");
} else {
  console.log("오전");
}
console.log(now1);

// now();
// 숫자형 데이터다, 함수가 아님.

now1 >= 12 ? console.log("오후") : console.log("오전");

let data = new Date().getHours() < 12 ? "오전" : "오후";
console.log(data);
