import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="animated-circle"
export default class extends Controller {

  connect() {
console.log('hello');
  }

  reveal() {
    const circles = document.querySelectorAll('circle:nth-child(2)');
    // Parcours tous les cercles
    for (var i = 0; i < circles.length; i++) {
      // Récupère la hauteur de la fenêtre du navigateur
      var window_height = window.innerHeight;
      // Récupère la position du cercle par rapport au haut du navigateur
      var circle_top = circles[i].getBoundingClientRect().top;
      // Définit le point de déclenchement de l'animation à partir du bas du navigateur
      var circle_point = 150;

      // Si le cercle est dans la fenêtre du navigateur
      if (circle_top < window_height - circle_point) {
        // Ajoute la classe reveal
        circles[i].classList.add('reveal');
      } else {
        // Sinon, retire la classe reveal
        circles[i].classList.remove('reveal');
      }
    }
  }
}
