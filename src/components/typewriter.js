import Typewriter from "typewriter-effect/dist/core";

var app = document.getElementById("app"); // Corrected typo

var typewriter = new Typewriter(app, {
  // Corrected variable name to lowercase
  loop: false,
  delay: 75,
});

typewriter // Corrected variable name
  .typeString("This is a<br> multiline typewriter<br> text effect")
  .start();
