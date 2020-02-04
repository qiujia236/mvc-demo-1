import $ from "jquery";
import "./app4.css";

const $circle = $("#app4 .circle");
console.log($circle);

$circle
  .on("mouseenter", () => {
    $circle.addClass("active");
  })
  .on("mouseleave", () => {
    $circle.removeClass("active");
  });
