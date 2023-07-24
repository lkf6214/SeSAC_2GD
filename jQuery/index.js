/*jq val() 사용*/
function getValue() {
  // input의 value를 가지고와서
  // alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정 완료 ~~");
}

/* css() 사용 */
function changeCssJs() {
  // span의 글씨크기 20px
  // 글자 색깔 빨간색
  let span = document.querySelector("span");
  span.style = "font-size:20px; color:red;";
}

function changeCssJq() {
  // 글자크기 40px
  // 글자색깔 파란색
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

function getCssJq() {
  // css 특정 속성값 가져오기
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJs() {
  // 네이버로 이동
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
  //   a.href='https://www.naver.com'
}
function changeAttrJq() {
  // 다음으로 이동
  //   target='_self' 로 변경
  $("a").attr("href", "https://www.daum.net");
  $("a").attr("target", "_self");
}

/* text() */
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "js 로 변경 &hearts;";
}

function changeTextJq() {
  $(".p-text").text("jq로 변경 &hearts;");
}

/* html() */
function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js 로 변경 &hearts;";
}

function changeHtmlJq() {
  $(".p-html").html("jq로 변경 &hearts;");
}

// 요소추가하기
// append
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막 자식으로 추가된 js";
  ul.append(li);
}

function appendJq() {
  $(".colors").append("<li>마지막 자식으로 추가된 jq</li>");
}

// prepend
// h4가 기본으로 마진패딩을 갖기 때문에 상하간격 있어보이는 것
function prependJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerHTML = "<li><h4>첫 자식으로 추가된 prependJs</h4> </li>";
  // jquery는 문자열에 태그 입력시 html태그로 받아들임
}
function prependJq() {}

// before
// 이거 안됨
function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  let.innerText = "이전 형제요소로 추가된 beforeJs";

  green.before(li);
}
function beforeJq() {
  $(".green").before("<li>before jq</li>");
}
// after
function afterJs() {}
function afterJq() {
  $(".green").after("<li>green 형제요소로 추가된 jq after</li>");
}

{
  /* 요소 삭제 */
}
function removeJs() {
  let li2 = document.querySelector("#li2");
  li2.remove();
}
function removeJq() {
  $("#li2").remove();
}
function emptyJs() {}
function emptyJq() {
  $("ul.nums").empty();
}

// 요소선택

function findParent() {
  console.log($(".child2").parent());
}

function findParents() {
  // 조상 모두를 선택
  console.log($(".child2").parents());
}

function findNext() {
  // child2의 다음 형제요소를 출력
  console.log($(".child2").next());
}

function findPrev() {
  // child2의 이전 형제요소를 출력
  console.log($(".child2").prev());
}

function findChildren() {
  // parent 자식요소 출력
  console.log($(".child2").children());
}

function addClass() {
  $("#hi").addClass("fs-50");
}

function removeClass() {
  $("#hi").removeClass("fs-50");
}

function removeClass() {
  $("#hi").removeClass("fs-50");
}

function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
