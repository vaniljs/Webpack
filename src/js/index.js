import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {
  jQuery("body").css("color", "blue");
});


document.querySelector('.container').addEventListener('click', (e) => alert(e.target.innerHTML));