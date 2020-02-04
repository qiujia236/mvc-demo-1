import $ from "jquery";
import "./app2.css";

const $tarBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tarBar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  const index = $li.index();

  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");

  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tarBar
  .children()
  .eq(0)
  .trigger("click");
