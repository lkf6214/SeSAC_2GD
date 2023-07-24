console.log(window);
console.log($(window));

console.log(document);
console.log($(document));

//mouse event
//click
// on은 addevent Listner이지만 click도 쓸 수 있음
$(".p-msg").on("click", function () {
  //   $(".p-msg").css("color", "blue");
  $(this).css("color", "blue"); // this는 자기 사진을 의미
});

$(".p-msg").click(function () {
  $(this).css("color", "red");
});

$(".num").click(function () {
  //   $("num").css("color", "red");
  $(this).css("color", "red");
});

//js
const nums = document.querySelectorAll(".num");
// nums = [one, two, three, four]
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    console.log(nums[i]);
    nums[i].style.color = "blue";
  });
}

//mouseover
$(".numbers").on("mouseover", () => {
  $(".numbers").css("background-color", "pink");
  //   $(".numbers").append("<div>mouseover로 추가된 자식</div>");
});

// $(".numbers").mouseover(() => {
//   $(".numbers").css("background-color", "green");
//   $(".numbers").append("<div>mouseover로 추가된 자식</div>");
// });

// $("div-hover").hover(function(){올렸을때}, function(){내렸을 때})
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

//scroll
$(window).scroll(() => {
  console.log("scroll");
});

// key event
// key down: 키보드가 눌렸을 때

$(".input-key").keydown(function (e) {
  console.log(e);
  console.log(e.key);
  console.log(e.code);

  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else if (e.code === "Enter" || e.code === "NumpadEnter") {
    console.log("엔터");
  } else {
    console.log("others");
  }
});

$("#form").submit(function (e) {
  e.preventDefault(); // ㅅ

  const todo = $("#todo").val();
  console.log(todo);
  $(".todos").append(`<li> ${todo}</li>`); //ul에 li를 만들고 추가
  $(".todos").val("");
});
