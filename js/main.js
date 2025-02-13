"use strict";
// =======
// ハンバーガーアニメーション
// =======
const menuBtn = document.querySelector(".menubtn");
const mask = document.querySelector(".nav-mask");
const logo = document.querySelector(".header-logo");
const list = document.querySelector(".nav-mask-list");

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("menubtn-active")) {
    menuBtn.classList.remove("menubtn-active");
    menuBtn.classList.add("menubtn-reverse");

    mask.classList.remove("nav-mask-active");

    list.classList.remove("nav-mask-list-active");
    list.classList.add("nav-mask-list-reverse");
  } else {
    menuBtn.classList.remove("menubtn-reverse");
    menuBtn.classList.add("menubtn-active");

    mask.classList.add("nav-mask-active");

    list.classList.remove("nav-mask-list-reverse");
    list.classList.add("nav-mask-list-active");
  }
  logo.classList.toggle("header-logo-active");
});

mask.addEventListener("click", (event) => {
  if (mask.classList.contains("nav-mask-active")) {
    if (event.target.classList.contains("nav-mask-list-active")) {
      return;
    } else if (menuBtn.classList.contains("menubtn-active")) {
      menuBtn.classList.remove("menubtn-active");
      menuBtn.classList.add("menubtn-reverse");

      mask.classList.remove("nav-mask-active");

      list.classList.remove("nav-mask-list-active");
      list.classList.add("nav-mask-list-reverse");
    } else {
      menuBtn.classList.remove("menubtn-reverse");
      menuBtn.classList.add("menubtn-active");

      mask.classList.add("nav-mask-active");

      list.classList.remove("nav-mask-list-reverse");
      list.classList.add("nav-mask-list-active");
    }
    logo.classList.toggle("header-logo-active");
  }
});

$(".slick-area").slick({
  arrows: false,
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "50px",
        slidesToShow: 1,
      },
    },
  ],
});

// =======
// スクロールアニメーション
// =======
const featureContents = document.querySelectorAll(".feature-img");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  featureContents.forEach((item) => {
    const itemTop = item.getBoundingClientRect().bottom;

    if (windowHeight > itemTop) {
      item.classList.add("feature-img-active");
    }
  });
});
// =======
// スムーススクロール
// =======
