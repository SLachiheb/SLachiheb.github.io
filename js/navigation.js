/*Document Variable*/
const open_overlay = document.querySelector(".open-overlay");
const overlay_navigation = document.querySelector(".overlay-navigation");
const nav_item_1 = document.querySelector("nav li:nth-of-type(1)");
const nav_item_2 = document.querySelector("nav li:nth-of-type(2)");
const nav_item_3 = document.querySelector("nav li:nth-of-type(3)");
const nav_item_4 = document.querySelector("nav li:nth-of-type(4)");
const nav_item_5 = document.querySelector("nav li:nth-of-type(5)");
const nav_item_6 = document.querySelector("nav li:nth-of-type(6)");

const top_bar = document.querySelector(".bar-top");
const middle_bar = document.querySelector(".bar-middle");
const bottom_bar = document.querySelector(".bar-bottom");

/*OPEN OVERLAY*/
const function_open_overlay = (e) => {
  overlay_navigation.classList.toggle("overlay-active");

  if (overlay_navigation.classList.contains("overlay-active")) {
    overlay_navigation.classList.remove("overlay-slide-up");
    overlay_navigation.classList.add("overlay-slide-down");

    top_bar.classList.remove("animate-out-top-bar");
    top_bar.classList.add("animate-top-bar");
    middle_bar.classList.remove("animate-out-middle-bar");
    middle_bar.classList.add("animate-middle-bar");
    bottom_bar.classList.remove("animate-out-bottom-bar");
    bottom_bar.classList.add("animate-bottom-bar");

    nav_item_1.classList.remove("slide-in-nav-item-reverse");
    nav_item_1.classList.add("slide-in-nav-item");
    nav_item_2.classList.remove("slide-in-nav-item-delay-1-reverse");
    nav_item_2.classList.add("slide-in-nav-item-delay-1");
    nav_item_3.classList.remove("slide-in-nav-item-delay-2-reverse");
    nav_item_3.classList.add("slide-in-nav-item-delay-2");
    nav_item_4.classList.remove("slide-in-nav-item-delay-3-reverse");
    nav_item_4.classList.add("slide-in-nav-item-delay-3");
    nav_item_5.classList.remove("slide-in-nav-item-delay-4-reverse");
    nav_item_5.classList.add("slide-in-nav-item-delay-4");
    nav_item_6.classList.remove("slide-in-nav-item-delay-5-reverse");
    nav_item_6.classList.add("slide-in-nav-item-delay-5");
  } else {
    overlay_navigation.classList.add("overlay-slide-up");
    overlay_navigation.classList.remove("overlay-slide-down");

    top_bar.classList.remove("animate-top-bar");
    top_bar.classList.add("animate-out-top-bar");
    middle_bar.classList.remove("animate-middle-bar");
    middle_bar.classList.add("animate-out-middle-bar");
    bottom_bar.classList.remove("animate-bottom-bar");
    bottom_bar.classList.add("animate-out-bottom-bar");

    nav_item_1.classList.add("slide-in-nav-item-reverse");
    nav_item_1.classList.remove("slide-in-nav-item");
    nav_item_2.classList.add("slide-in-nav-item-delay-1-reverse");
    nav_item_2.classList.remove("slide-in-nav-item-delay-1");
    nav_item_3.classList.add("slide-in-nav-item-delay-2-reverse");
    nav_item_3.classList.remove("slide-in-nav-item-delay-2");
    nav_item_4.classList.add("slide-in-nav-item-delay-3-reverse");
    nav_item_4.classList.remove("slide-in-nav-item-delay-3");
    nav_item_5.classList.add("slide-in-nav-item-delay-4-reverse");
    nav_item_5.classList.remove("slide-in-nav-item-delay-4");
    nav_item_6.classList.add("slide-in-nav-item-delay-5-reverse");
    nav_item_6.classList.remove("slide-in-nav-item-delay-5");
  }
};

open_overlay.addEventListener("click", function_open_overlay);

/*SCROLL TO*/

const btn_explore = document.querySelector(".btn-explore");

const btn_home = document.querySelector(".nav_home");
const btn_about = document.querySelector(".nav_about");
const btn_skills = document.querySelector(".nav_skills");
const btn_algo = document.querySelector(".nav_algo");
const btn_web = document.querySelector(".nav_web");
const btn_contact = document.querySelector(".nav_contact");

const nav_home = document.querySelector("#scroll--home");
const nav_about = document.querySelector("#scroll--about");
const nav_skills = document.querySelector("#scroll--skills");
const nav_algo = document.querySelector("#scroll--algo");
const nav_web = document.querySelector("#scroll--web");
const nav_contact = document.querySelector("#scroll--contact");

btn_explore.addEventListener("click", function (e) {
  e.preventDefault();
  nav_algo.scrollIntoView({ behavior: "smooth" });
});
btn_home.addEventListener("click", function (e) {
  e.preventDefault();
  nav_home.scrollIntoView({ behavior: "smooth" });
  function_open_overlay(e);
});
btn_about.addEventListener("click", function (e) {
  e.preventDefault();
  nav_about.scrollIntoView({ behavior: "smooth" });
  function_open_overlay(e);
});
btn_skills.addEventListener("click", function (e) {
  e.preventDefault();
  nav_skills.scrollIntoView({ behavior: "smooth" });
  function_open_overlay(e);
});
btn_algo.addEventListener("click", function (e) {
  e.preventDefault();
  nav_algo.scrollIntoView({ behavior: "smooth" });
  function_open_overlay(e);
});
btn_web.addEventListener("click", function (e) {
  e.preventDefault();
  nav_web.scrollIntoView({ behavior: "smooth" });
  function_open_overlay(e);
});
btn_contact.addEventListener("click", function (e) {
  e.preventDefault();
  nav_contact.scrollIntoView({ behavior: "smooth" });
  function_open_overlay(e);
});
