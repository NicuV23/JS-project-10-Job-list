const option = document.querySelectorAll(".leftSpan");
const toolBar = document.getElementById("toolBar");
const filter1 = document.getElementById("filter1");
const filter2 = document.getElementById("filter2");
const filter3 = document.getElementById("filter3");
const filter4 = document.getElementById("filter4");
const filter5 = document.getElementById("filter5");
const filter6 = document.getElementById("filter6");
const filter7 = document.getElementById("filter7");
const filter8 = document.getElementById("filter8");
const filter9 = document.getElementById("filter9");
const filter10 = document.getElementById("filter10");
const filter11 = document.getElementById("filter11");
const filter12 = document.getElementById("filter12");
const filter13 = document.getElementById("filter13");
const filter14 = document.getElementById("filter14");
const filter15 = document.getElementById("filter15");
const filter16 = document.getElementById("filter16");
const x1 = document.getElementsByClassName("delete1")[0];
const x2 = document.getElementsByClassName("delete2")[0];
const x3 = document.getElementsByClassName("delete3")[0];
const x4 = document.getElementsByClassName("delete4")[0];
const x5 = document.getElementsByClassName("delete5")[0];
const x6 = document.getElementsByClassName("delete6")[0];
const x7 = document.getElementsByClassName("delete7")[0];
const x8 = document.getElementsByClassName("delete8")[0];
const x9 = document.getElementsByClassName("delete9")[0];
const x10 = document.getElementsByClassName("delete10")[0];
const x11 = document.getElementsByClassName("delete11")[0];
const x12 = document.getElementsByClassName("delete12")[0];
const x13 = document.getElementsByClassName("delete13")[0];
const x14 = document.getElementsByClassName("delete14")[0];
const x15 = document.getElementsByClassName("delete15")[0];
const x16 = document.getElementsByClassName("delete16")[0];

option.forEach((element) => {
  element.addEventListener("click", function () {
    toolBar.style.display = "flex";
    if (element.innerText === "Frontend") {
      filter1.style.display = "flex";
    }
    if (element.innerText === "Senior") {
      filter2.style.display = "flex";
    }
    if (element.innerText === "HTML") {
      filter3.style.display = "flex";
    }
    if (element.innerText === "CSS") {
      filter4.style.display = "flex";
    }
    if (element.innerText === "JavaScript") {
      filter5.style.display = "flex";
    }
    if (element.innerText === "Fullstack") {
      filter6.style.display = "flex";
    }
    if (element.innerText === "Midweight") {
      filter7.style.display = "flex";
    }
    if (element.innerText === "Python") {
      filter8.style.display = "flex";
    }
    if (element.innerText === "React") {
      filter9.style.display = "flex";
    }
    if (element.innerText === "Junior") {
      filter10.style.display = "flex";
    }
    if (element.innerText === "Sass") {
      filter11.style.display = "flex";
    }
    if (element.innerText === "Ruby") {
      filter12.style.display = "flex";
    }
    if (element.innerText === "Backend") {
      filter13.style.display = "flex";
    }
    if (element.innerText === "Ror") {
      filter14.style.display = "flex";
    }
    if (element.innerText === "Vue") {
      filter15.style.display = "flex";
    }
    if (element.innerText === "Django") {
      filter16.style.display = "flex";
    }
  });
});

x1.addEventListener("click", function () {
  filter1.remove();
  checkAndHideToolBar();
});
x2.addEventListener("click", function () {
  filter2.remove();
  checkAndHideToolBar();
});
x3.addEventListener("click", function () {
  filter3.remove();
  checkAndHideToolBar();
});
x4.addEventListener("click", function () {
  filter4.remove();
  checkAndHideToolBar();
});
x5.addEventListener("click", function () {
  filter5.remove();
  checkAndHideToolBar();
});
x6.addEventListener("click", function () {
  filter6.remove();
  checkAndHideToolBar();
});
x7.addEventListener("click", function () {
  filter7.remove();
  checkAndHideToolBar();
});
x8.addEventListener("click", function () {
  filter8.remove();
  checkAndHideToolBar();
});
x9.addEventListener("click", function () {
  filter9.remove();
  checkAndHideToolBar();
});
x10.addEventListener("click", function () {
  filter10.remove();
  checkAndHideToolBar();
});
x11.addEventListener("click", function () {
  filter11.remove();
  checkAndHideToolBar();
});
x12.addEventListener("click", function () {
  filter12.remove();
  checkAndHideToolBar();
});
x13.addEventListener("click", function () {
  filter13.remove();
  checkAndHideToolBar();
});
x14.addEventListener("click", function () {
  filter14.remove();
  checkAndHideToolBar();
});
x15.addEventListener("click", function () {
  filter15.remove();
  checkAndHideToolBar();
});
x16.addEventListener("click", function () {
  filter16.remove();
  checkAndHideToolBar();
});
