// document.querySelector("span").innerText="맛없다"
const a = document.querySelector("span");
// console.log(a);
a.innerText = "롸..?";

const img = document.querySelector("img");
img.src = "../css/img/eeyore.png"; //점으로 속성 변경 가능
img.alt = "이요르";
img.setAttribute("width", "300");

// console.log(pooh.alt);
// console.log(pooh.getAttribute("src"));
// pooh.alt = "이요르";
// pooh.src = "../css/img/eeyore.png";
