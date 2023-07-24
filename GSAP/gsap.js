gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3, // animation을 3회 추가하는 것
  yoyo: true,
  ease: "linear",
  ease: "bounce.inOut",
  ease: "power1.out",
});

const staggerAll = document.querySelectorAll(".stagger");
console.log(staggerAll);
// from, to의 target 으로는 배열 형태가 와도 됨
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 1.5,
  repeat: -1,
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
});

let tl = gsap.timeline();

//방법 1
// tl.to(".skyblue", {
//   x: "50vw",
//   duration: 2,
// });

// tl.to(".gray", {
//   x: 400,
//   duration: 2,
// });

// tl.to(".yellow", {
//   x: 500,
//   duration: 2,
// });

//방법2
tl.to(".skyblue", {
  x: "50vw",
  xPercent: -50,
  duration: 2,
})

  .to(".gray", {
    x: 400,
    duration: 2,
  })

  .to(".yellow", {
    x: 500,
    duration: 2,
  });

//방법3
//  < 는 앞 요소와 동시에 하겠다는 뜻
// tl.to(".skyblue", {
//   x: "50vw",
//   duration: 2,
// })

//   .to(
//     ".gray",
//     {
//       x: 400,
//       duration: 2,
//     },
//     "<"
//   )

//   .to(
//     ".yellow",
//     {
//       x: 500,
//       duration: 2,
//     },
//     "<"
//   );
