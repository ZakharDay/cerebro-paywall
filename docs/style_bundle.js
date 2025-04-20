/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

function init_S_NoticeBar() {
  var bar = document.querySelector('.S_NoticeBar');
  if (bar) {
    var closeButton = bar.querySelector('.S_NoticeBar .A_IconButton');
    closeButton.addEventListener('click', function () {
      bar.remove();
      document.body.classList.remove('notice');
    });
  }
}
function init_S_SideBar_mobile() {
  var openButton = document.querySelector('.O_MenuBar .A_IconButton');
  var closeButton = document.querySelector('.O_SideBarHome .A_IconButton');
  openButton.addEventListener('click', function () {
    document.body.classList.add('menu');
  });
  closeButton.addEventListener('click', function () {
    document.body.classList.remove('menu');
  });
}
document.addEventListener('DOMContentLoaded', function () {
  init_S_NoticeBar();
  init_S_SideBar_mobile();
});
/******/ })()
;