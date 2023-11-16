import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="animated-circle"
export default class extends Controller {

  connect() {
console.log('hello');
  }

  reveal() {
    const circles = document.querySelectorAll('circle:nth-child(2)');
    console.log(circles.length);
    for (var i = 0; i < circles.length; i++) {
      var window_height = window.innerHeight;
      var circle_top = circles[i].getBoundingClientRect().top;
      var circle_point = 150;

      if (circle_top < window_height - circle_point) {
        circles[i].classList.add('reveal');
      } else {
        circles[i].classList.remove('reveal');
      }
    }
  }
}
