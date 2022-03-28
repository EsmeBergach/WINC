let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-main");
  let getSidebarUl = document.querySelector(".nav-main ul");
  let getSidebarLinks = document.querySelectorAll(".nav-main a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "150px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "40px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};
