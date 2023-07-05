const lis = document.querySelectorAll("li");
for (let li of lis) {
  console.log(li);
  li.classList.toggle("todo");
  li.classList.toggle("done");
}
