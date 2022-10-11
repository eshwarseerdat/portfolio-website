const scrollBtn = document.querySelector("#scrollTop");

const scrollFunc = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

window.onscroll = function () {
  scrollFunc();
};

scrollBtn.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
