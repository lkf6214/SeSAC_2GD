const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

/* btn1 */
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨군요!");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "gray";
});

/* btn2 */
const container = document.getElementById("container");

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

/* btn3 */
function changeColor() {
  const divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
  //   맨 마지막 요소만 빨강색으로 변경!
  divs[divs.length - 1].style.backgroundColor = "red";
}

btn3.addEventListener("click", changeColor);

/* btn4 */
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}
btn4.addEventListener("click", changeBtnColor);

/* click 외의 많은 동작들 */
console.log(window);
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 900) {
    document.querySelector(".pos").style.opacity = "1";
  } else {
    document.querySelector(".pos").style.opacity = "0.3";
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");

// addEventListener는 매개변수 하나만 들어가야함.
// function() <= 요 안에 들어가는게 매개변수
// event 말고 다른거 들어가도 됨
btn.addEventListener("click", function (event) {
  console.log(event);
});

// click 클릭하면 click에 대한 정보가 event  객체에 담겨있음

// btn.addEventListener("keybord", function (event) {
//   console.log(event.key);
//   console.log(event.code);
// });

input.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);

  // 방향키 위 아래 왼쪽 오른쪽을 누르면
  // 각각 누를 때마다 "up", "down", "left", "right"
  if (event.key === "ArrowUp") {
    console.log("up");
  } else if (event.key === "ArrowDown") {
    console.log("down");
  } else if (event.key === "ArrowLeft") {
    console.log("left");
  } else if (event.key === "ArrowRight") {
    console.log("right");
  } else {
    console.log("others");
  }
});
// 변경 이벤트
const chgInput = document.getElementById("change-input");
chgInput.addEventListener("input", () => {
  console.log("변경중!!");
  let div = document.querySelector(".box");
  div.innerHTML = chgInput.value;
  /* 
  input: 현재 input 에 변경사항이 존재하는 순간을 계속 인식
  실시간으로 바로 반영할 수 있음

  shift, ctrl 등 입력값이 변하지 않는다면 이벤트 발생 x
  */
});
chgInput.addEventListener("change", () => {
  // 'change' : input 에 변경이 일어나고
  // 다른 요소를 클릭해서 focus out 시키면 이벤트 발생됨
  console.log("변경되었어요!!");
});

// -----------------
// 폼이 제출되는 이벤트
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
// console.log(todoForm);
// console.log(todos);
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  /// 폼이 실제로 제출되지 않도록 이벤트를 막는 것.
  // 새로고침을 막기 위한 것
  const todoInput = document.querySelector('[name = "todo"]');
  // console.log(todoInput.value);
  // input 창 내용은 value 임.

  // const todo = todoInput.value;
  // const li = document.createElement("li");
  // li.append(todo);
  // // <li>안녕</li>asdf
  // todos.append(li);

  // 만약 공백이 있을 때는 추가하고 싶지 않다

  if (todoInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.append(todoInput.value);
    console.log(todoInput);
    todos.append(li);
  } else {
    alert("공백문자는 추가할 수 없습니다.");
  }
  todoInput.value = "";
});
