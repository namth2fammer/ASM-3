"use strict";
const liinfo = document.querySelector(".li-info");
const submibinfo = document.querySelector(".submit-info");
const email = document.querySelector(".email");
const info = document.querySelector("info");

const input = function () {
  info.classList.add("hidden");
};

submibinfo.addEventListener("click", function () {
  const email = document.querySelector(".email").value;
  let emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
  console.log(email);
  if (emailPattern.test(email)) {
    //Show info
    console.log("OK");
    liinfo.classList.remove("hidden");
    document.querySelector("form").style.display = "none";
  } else {
    alert("Invalid email");
  }
});

// JOB-EXP //
const viewExp = document.querySelector(".view-more-exp");
const exp = document.querySelector(".exp");

var hoverExpOver = document.getElementById("hoverexp");
var hoverExpout = document.getElementById("hoverexp");
hoverexp.addEventListener("mouseover", function () {
  if (hoverexp) {
    viewExp.classList.remove("hidden");
  }
});
hoverexp.addEventListener("mouseout", function () {
  if (hoverexp) {
    viewExp.classList.add("hidden");
  }
});
viewExp.addEventListener("click", (e) => {
  exp.classList.toggle("view-more");
  if (viewExp.innerText === "VIEW MORE") {
    viewExp.innerText = "VIEW LESS";
  } else {
    viewExp.innerText = "VIEW MORE";
  }
});
// JOB-EDU //
const viewEdu = document.querySelector(".view-more-edu");
const edu = document.querySelector(".edu");

var hoverEduOver = document.getElementById("hoveredu");
var hoverEduOut = document.getElementById("hoveredu");

hoveredu.addEventListener("mouseover", function () {
  if (hoveredu) {
    viewEdu.classList.remove("hidden");
  }
});
hoveredu.addEventListener("mouseout", function () {
  if (hoveredu) {
    viewEdu.classList.add("hidden");
  }
});

viewEdu.addEventListener("click", (e) => {
  edu.classList.toggle("view-more");
  if (viewEdu.innerText === "VIEW MORE") {
    viewEdu.innerText = "VIEW LESS";
  } else {
    viewEdu.innerText = "VIEW MORE";
  }
});
// JOB-ACT //
const viewAct = document.querySelector(".view-more-act");
const act = document.querySelector(".act");
var hoverActOver = document.getElementById("hoveract");
var hoverActOut = document.getElementById("hoveract");

hoveract.addEventListener("mouseover", function () {
  if (hoveract) {
    viewAct.classList.remove("hidden");
  }
});
hoveract.addEventListener("mouseout", function () {
  if (hoveract) {
    viewAct.classList.add("hidden");
  }
});

viewAct.addEventListener("click", (e) => {
  act.classList.toggle("view-more");
  if (viewAct.innerText === "VIEW MORE") {
    viewAct.innerText = "VIEW LESS";
  } else {
    viewAct.innerText = "VIEW MORE";
  }
});
// JOB-FAV //
const viewFav = document.querySelector(".view-more-fav");
const fav = document.querySelector(".fav");

var hoverFavOver = document.getElementById("hoverfav");
var hoverFavOut = document.getElementById("hoverfav");
var hidden1 = document.getElementById("hidden");
document.querySelector(".fav").style.display = "none";

// viewFav.addEventListener("click",(e) {
//   if (viewFav) {
//     document.querySelector(".fav").style.display = "inline";
//   }
// });

hoverfav.addEventListener("mouseover", function () {
  if (hoverfav) {
    viewFav.classList.remove("hidden");
  }
});
hoverfav.addEventListener("mouseout", function () {
  if (hoverfav) {
    viewFav.classList.add("hidden");
  }
});

viewFav.addEventListener("click", (e) => {
  fav.classList.toggle("view-more");
  if (viewFav.innerText === "VIEW MORE") {
    viewFav.innerText = "VIEW LESS";
    document.querySelector(".fav").style.display = "grid";
  } else {
    viewFav.innerText = "VIEW MORE";
    document.querySelector(".fav").style.display = "none";
  }
});
// JOB-LG //
const viewLg = document.querySelector(".view-more-lg");
const lg = document.querySelector(".lg");

var hoverLgOver = document.getElementById("hoverlg");
var hoverLgOut = document.getElementById("hoverlg");

hoverlg.addEventListener("mouseover", function () {
  if (hoverlg) {
    viewLg.classList.remove("hidden");
  }
});
hoverlg.addEventListener("mouseout", function () {
  if (hoverlg) {
    viewLg.classList.add("hidden");
  }
});

viewLg.addEventListener("click", (e) => {
  lg.classList.toggle("view-more");
  if (viewLg.innerText === "VIEW MORE") {
    viewLg.innerText = "VIEW LESS";
  } else {
    viewLg.innerText = "VIEW MORE";
  }
});
// JOB-SKILL//
const viewSkill = document.querySelector(".view-more-skill");
const skill = document.querySelector(".skill");

var hoverSkillOver = document.getElementById("hoverskill");
var hoverSkillOut = document.getElementById("hoverskill");

hoverskill.addEventListener("mouseover", function () {
  if (hoverskill) {
    viewSkill.classList.remove("hidden");
  }
});
hoverskill.addEventListener("mouseout", function () {
  if (hoverskill) {
    viewSkill.classList.add("hidden");
  }
});

viewSkill.addEventListener("click", (e) => {
  skill.classList.toggle("view-more");
  if (viewSkill.innerText === "VIEW MORE") {
    viewSkill.innerText = "VIEW LESS";
  } else {
    viewSkill.innerText = "VIEW MORE";
  }
});
