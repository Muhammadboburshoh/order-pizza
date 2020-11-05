var elMarkingPizzaForm = document.querySelector(".making-pizza");
var elPizzaBread = elMarkingPizzaForm.querySelector(".pizza-bread");
var elOnThePizza = elMarkingPizzaForm.querySelector(".on-the-pizza");
var elAdditions = elMarkingPizzaForm.querySelector(".additions");
var elReolad = document.querySelector(".about-pizza");


var aboutPizza = [];


elMarkingPizzaForm.addEventListener("change", function (evt) {
  evt.preventDefault();

  aboutPizza.splice(0, 1, elPizzaBread.value)

  elReolad.innerHTML = "";
  console.log(aboutPizza)
})


/*for ( var i = 0; i < additions.length; i++) {

  var newLi = document.createElement("LI");
  newLi.textContent = pizzaAbout[i];
  elReolad.appendChild(newLi);

  console.log(additions[i]);

}*/













