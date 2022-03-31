// Toggle Menu
let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-main");
  let getSidebarUl = document.querySelector(".nav-main ul");
  let getSidebarLinks = document.querySelectorAll(".nav-main ul li");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "150px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "0px";

    let arrayLength = getSidebarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    toggleNavStatus = false;
  }
};

// Change: Color body element

let color = (document.body.style.background = "#cedaec");

function setColor(value) {
  let color = document.body.style.backgroundColor;
  switch (value) {
    case "default":
      color = "#cedaec";
      break;
    case "aqua":
      color = "#b3ffd9";
      break;
    case "blush":
      color = "#ffe6ff";
      break;
    case "sage":
      color = "#527a7a";
      break;
    case "stone":
      color = "#8a9196";
  }
  document.body.style.backgroundColor = color;
  let getSidebarUl = document.querySelector(".nav-main ul");
  getSidebarUl.style.visibility = "hidden";
  toggleNavStatus = false;
}

//Hotkey Keypress Colors

let hotKeys = (e) => {
  let windowEvent = window.event;
  if (windowEvent.keyCode === 49) {
    document.body.style.background = "#cedaec";
  } else if (windowEvent.keyCode === 50) {
    document.body.style.background = "#b3ffd9";
  } else if (windowEvent.keyCode === 51) {
    document.body.style.background = "#ffe6ff";
  } else if (windowEvent.keyCode === 52) {
    document.body.style.background = "#527a7a";
  } else if (windowEvent.keyCode === 53) {
    document.body.style.background = "#8a9196";
  }
};
document.onkeydown = hotKeys;

//Console log: Color Selected

let colorBtns = document.querySelectorAll("input[name=color]");
let result = document.getElementById("result");

let findSelected = () => {
  let selected = document.querySelector("input[name='color']:checked").value;
  console.log(selected);
};

colorBtns.forEach((colorBtns) => {
  colorBtns.addEventListener("change", findSelected);
});
