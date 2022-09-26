import "./css/components.css";
import "./css/icons.css";
import "./css/responsee.css";
import "./css/template-style.css";

import "./js/responsee";

import * as jQuery from 'jquery';

jQuery(document).ready(function ($) {
  // Sticky Nav Bar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.sticky').addClass("fixed");
    }
    else {
      $('.sticky').removeClass("fixed");
    }
  });
});

