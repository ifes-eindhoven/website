import "./css/components.css";
import "./css/icons.css";
import "./css/responsee.css";
import "./css/template-style.css";

import "./js/responsee";
import ready from './js/ready';

ready(() => {
  window.addEventListener('scroll', () => {
    let bar = document.querySelector(".sticky");
    if (bar === null) return;
    if (window.scrollY > 100) {
      bar.classList.add("fixed");
    } else {
      bar.classList.remove("fixed");
    }
  });
})

