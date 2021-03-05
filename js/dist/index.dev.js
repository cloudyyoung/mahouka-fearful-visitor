"use strict";

$("body").append("\n    <div class=\"bg-main animated fadeIn\"></div>\n    <div class=\"logo animated fadeIn delay-1s\"></div>\n    <div class=\"chara animated fadeIn delay-1s\"></div>\n    <div class=\"flowers animated fadeIn\"></div>\n");

for (var t = 0; t < 20; t++) {
  $(".flowers").append("<div class=\"flower ".concat(t, "\"><p></p></div>"));
}