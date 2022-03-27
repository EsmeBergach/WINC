//Part 1
mybutton.addEventListener("click", function () {
  mybutton.style.background = "lightblue";
});
mybutton.addEventListener("click", function () {
  alert("Button is clicked!");
});

//Part 2
const changeClassBlueBg = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("red-background");
};

const attachToButton = function () {
  const changeColorBtn = document.getElementById("mybutton2");
  changeColorBtn.addEventListener("click", function () {
    changeClassBlueBg();
  });
};

// const attachEventToAlertButton = function () {
//   const alertButton = document.getElementById("toggle-btn");
//   alertButton.addEventListener("click", function () {
//     alert("Show up!");
//   });
// };

attachToButton();
// attachEventToAlertButton();
