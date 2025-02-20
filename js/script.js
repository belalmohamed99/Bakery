let navBar = document.querySelector(".navbar");
let logo = document.querySelector(".catch-img");
let navList = document.querySelectorAll("#home li a ");
window.addEventListener("scroll", function () {
  for (let i = 0; i < navList.length; i++) {
    if (window.scrollY > 70) {
      navBar.style.backgroundColor = "white";
      navList[i].style.color = "black";
      logo.setAttribute("src", "./images/bakery-color.png");
    } else {
      navBar.style.backgroundColor = "transparent";
      navList[i].style.color = "white";
      logo.setAttribute("src", "./images/bakery-light-1.png");
    }
  }
});
