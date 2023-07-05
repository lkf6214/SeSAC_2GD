const div1 = document.getElementById("div1");
/* 
1. 태그 내부 내용
 - innerText : 요소안의 텍스트를 가져오거나 수정
 - innerHTML : 요소안의 '코드'를 가져오거나 수정
 - textContent : innerText 처럼 텍스트 정보 표시
*/

console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerHTML = "여기는 <b>첫번째</b> div 태그입니다! &hearts;";
div1.innerText = "      여기는 <b>첫번째</b> div 태그입니다! &hearts;     ";
console.log(div1.innerText);
div1.textContent = "    여기는 <b>첫번째</b> div 태그입니다! &hearts;     ";
console.log(div1.textContent);

/* 2. 속성 */
/* 
 - setAttribute() : 속성값 설정
 - getAttribute() : 속성값 가져오기
 - 점(.)으로 접근하고 속성값도 변경할 수 있음
*/
// 메소드로 속성에 접근후 변경
const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");

// naver.setAttribute(속성이름, 속성값)
naver.setAttribute("href", "https://www.google.com");
// 텍스트를 바꾸고싶으면 ? innerText 사용! //naver => 구글
naver.innerText = "구글";
console.log(pooh.getAttribute("src"));

// 점으로 속성에 접근후 변경
console.log(pooh.src);
console.log(pooh.alt);
pooh.alt = "푸 사진입니다!!!!";

/* 3. CSS 지정 */
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li"); // 배열
/*  
[     <li>이요르</li>,
      <li id="tigger">티거</li>,
      <li>피글렛</li>,
      <li>로빈</li>
]

*/
// 3-1. style 속성 사용
// for (let li of list) {
//   console.log(li);
//   li.style.backgroundColor = "pink";
//   li.style.color = "#fff";
//   li.style.fontSize = "1.3rem";
// }

// 3-2. classList 사용
console.log(h1.classList);
// 스타일 없애기
h1.classList.add("add-h1");
// h1.classList.remove("add-h1");
console.log(h1.classList.contains("add-h1"));

/* if (h1.classList.contains("add-h1")) {
    h1.classList.remove("add-h1");
} else {
    h1.classList.add("add-h1");
}

h1.classList.toggle("add-h1");
*/
// li 태그(4개)에 friends 클래스 추가해보기

for (let el of list) {
  console.log(el);
  el.classList.add("friends");
}

// 4.  요소 생성, 추가, 삭제, 접근
const friends = document.getElementById("friends");
const tigger = document.getElementById("tigger");
console.log(friends);

//자식 노드에 접근
console.log("--자식 노드에 접근--");
console.log(friends.children);
console.log(friends.children[0]);

//부모 노드에 접근
console.log("--부모 노드에 접근--");
console.log(tigger.parentNode);

//형제 노드에 접근
console.log("--형제 노드에 접근--");
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling); //피글렛
console.log(tigger.nextElementSibling.nextElementSibling); //로빈

// 4-1. 요소 생성
const container = document.querySelector(".container");
console.log(container);

const p = document.createElement("p");
p.innerText = "추가한 p";
p.style.fontWeight = "bold";
console.log(p);

// 4-2. 요소 추가
// 추가하고 싶은 요소 추가
container.append(p);

const p2 = document.createElement("p");
p2.innerText = "p2";

const p3 = document.createElement("p");
p3.innerText = "p3";

p2.classList.add("p-2");
p3.classList.add("p-3");
container.prepend(p3);
container.append(p2);

const h2 = document.createElement("h2");
h2.innerText = "추가된 h2";
h1.before(h2);

const h3 = document.createElement("h3");
h3.innerText = "추가된 h3";
h1.after(h3);

// // appendChild 사용
// const p4 = document.createElement("p");
// p4.innerText = "p4";
// p4.classList.add("p-2");

// const p5 = document.createElement("p");
// p5.innerText = "p5";
// p5.classList.add("p-3");

// container.append(p4, p5, "안녕하세요");

const div = document.createElement("div");
container.after(div);

const img = document.createElement("img");
img.src = "../js_DOM_PRACTICE/img/piglet.png";
img.alt = "피그렛";
div.append(img);

const p6 = document.createElement("span");
p6.innerText = "안녕 피그렛 얼굴보기 힘들다";
img.after(p6);

/* 4-3. 요소 삭제 */
// remove, removeChild
const firstLi = document.querySelector("li");
// const friends = document.getElementById("friends");
// console.log(firstLi);

// firstLi.remove();
friends.removeChild(firstLi);
