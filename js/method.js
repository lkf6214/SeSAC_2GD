// 문자열 관련 메소드
/* 
- length(속성)
- toUpperCase()
- toLowerCase()
- trim()
- slice()
- replace()
- replaceAll()
- repeat()
- indexOf()
- split()
*/

let str1 = "   Strawberry Moon   ";
// 인덱싱
console.log(str1[4]);
console.log(str1[3] + str1[15] + str1[17]);

// 문자열의 길이(공백 포함)
console.log(str1.length);

// 양쪽 공백 없애기 trim()
let str2 = str1.trim();
console.log(str2);
console.log(str2.length);

console.log("대문자로 변경! " + str2.toUpperCase());
console.log("소문자로 변경! " + str2.toLowerCase());

let fruit = "applemango";
// indexOf("문자열")
console.log(fruit.indexOf("p"));
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("z")); // 없는 문자는 -1 반환

// charAt(인덱스 번호)
console.log(fruit.charAt(3));

// slice(인덱스 번호)
console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-1));
console.log(fruit.slice(-3));

console.log(fruit); // 문자열은 변하지 않아요!

let msg = "Wow~ It is so amazing!!!";
/* replace replaceAll */
console.log(msg.replace("o", "a"));
console.log(msg.replaceAll("o", "ooo"));
console.log(msg.replace("Wow", "hey"));
console.log(msg); // 문자열은 변하지 않아요

let date = "2023.07.03";
// 2023-07-03
console.log(date.replaceAll(".", "-"));
// 반복
console.log("a".repeat(5));

// split('') -> 문자열을 배열로 변경하는 메소드
// let date = "2023.07.03";
// [2023, 07, 03]
const dateArr = date.split("");
console.log(dateArr);
