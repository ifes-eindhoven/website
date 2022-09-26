import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

// import './js/responsee';

import * as jQuery from 'jquery';
import ready from './js/ready';


ready(() => {      
  let owl = jQuery('.carousel-fade-transition');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 4000
  }); 
});

