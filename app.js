let arrow = document.querySelectorAll(".arrow");
arrow.forEach((element) => {
  let arrowParent = element.parentElement.parentElement;
  arrowParent.addEventListener("click", (e) => {
    arrowParent.classList.toggle("show-menu");
  });
  // element.addEventListener("click", (e) => {
  //   let arrowParent = e.target.parentElement.parentElement;
  //   console.log(arrowParent);
  //   arrowParent.classList.toggle("show-menu");
  // });
});

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("close");
});

let homeContent = document.querySelector(".home-content");
const sticky = homeContent.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset >= sticky) homeContent.classList.add("sticky");
  else homeContent.classList.remove("sticky");
};
