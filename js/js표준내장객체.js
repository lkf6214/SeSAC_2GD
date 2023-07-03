// 자바스크립트가 기본으로 가지고 있는 객체
// String, Number, Array, Data, Math, Object, ...

// Date 객체
// 시간, 날짜 정보를 얻을 때 사용함

let now = new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth(), "월"); //0~11 (7월이면 6월)
console.log(now.getDate(), "일"); //1~31
console.log(now.getHours(), "시간"); //1~12
console.log(now.getMinutes(), "분"); //0~59
console.log(now.getSeconds(), "초"); //0~59
console.log(now.getMilliseconds(), "ms"); //1~31
console.log(now.getDay(), "요일"); //0=일, 1=월

// Date 객체를 이용해서 오늘 요일을 얻고
// switch-cass 문과 if문으로 오늘이 평일 or 주말 구별할 것

// 실습
/*
let today = new Date();

if ((today = 0)) {
  console.log("일");
} else if ((today = 1)) {
  console.log("월");
} else if ((today = 2)) {
  console.log("화");
} else if ((today = 3)) {
  console.log("수");
} else if ((today = 4)) {
  console.log("목");
} else if ((today = 5)) {
  console.log("금");
} else {
  console.log("토");
}
*/

let today1 = new Date();

switch (today1) {
  case 0:
    console.log("주말");
  case 1:
    console.log("평일");
  // break;
  case 2:
    console.log("평일");

  case 3:
    console.log("평일");

  case 4:
    console.log("평일");

  case 5:
    console.log("평일");

  case 6:
    console.log("주말");
}

let day = new Date().getDate();
if (day === 0 || day === 6) {
  console.log("주말");
} else {
  console.log("평일");
}

// switch
// 삼항연산자
console.log(day === 0 || day === 6 ? "주말" : "평일");

// switch
switch (day) {
  case 0:
  case 6:
    console.log("주말");
    break;
  default:
    console.log("평일");
    break;
}

let past = new Date(2020, 1, 13, 10, 10, 10);

// new Date (y, m, d, h, m, s)
// 시 분 초가 설정되어있지 않았을 때 00:00:00
console.log(past);

// 수학적인 상수나 함수
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
// 매개변수 중 가장 작은 갋 출력
console.log(Math.max(100, -1, 30, 20, 5));
console.log(Math.min(100, -1, 30, 20, 5));
console.log(Math.ceil(5.4)); //올림
console.log(Math.floor(5.55)); //내림
console.log(Math.round(5.6)); //반올림
console.log(Math.random());

// 0 < +10;
console.log(Math.floor(Math.random() * 10));
// 0.xxx   ~ 9.xxx

// object
const areaNum1 = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum1));
console.log(Object.values(areaNum1));
