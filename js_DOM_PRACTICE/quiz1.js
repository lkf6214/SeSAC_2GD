// div.document.querySelector("span").setAttribute("color", "blueViolet");
// console.log();

const span = document.querySelectorAll("span");
console.log(span);

for (let spanel of span) {
  console.log(spanel);
  spanel.setAttribute("style", "color:blueviolet; font-weight:bold;");
}
// 하나만 바꾸려면 span[0] 배열 순서대로 하면 됨
span[0].style.color = "blue";

// 기본 for문 사용
for (let i = 0; i < span.length; i++) {
  console.log(span[i]);
  span[i].style.color = "red";
  span[i].style.textAlign = "center";
}

// forEach 사용
span.forEach((el) => {
  console.log(el);
  el.setAttribute("style", "color:pink; font-weight:700");
});

// span[0].setAttribute("style", "color:blueViolet");

const container = document.querySelector(".container");
console.log(container);
container.style.backgroundColor = "#eee";
container.style.textAlign = "center";
