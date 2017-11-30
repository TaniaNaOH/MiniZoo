/*console.log("memorama");
var cards = document.getElementsByClassName("card");
console.log(cards);
for (var i = 0;i < cards.length; i++){
var item= cards[i];
  //console.log (cards[i]);
item.classList.add("efects")
item.addEventListener("mouseover",rotation);
}

function rotation () {
  if (this.classList.contains("sepia")){
  else {
    this.classList.add("rotation-efect");
  }
}
*/
console.log ("Minizoo");

var images = document.getElementsByClassName("animal");
var select = document.getElementById("select");
select.onchange = function(){
  if (select.value=="original"){
    for (var i =0; i <image.length; i++); {
      var item= animal[i];
      item.classList.add("original");
      item.addEventListener("select");
      images[i].classList.remove("white-black");
      images[i].classList.remove("negative-colors");
      images[i].classList.remove("sepia");
    }
  }
}

var images = document.getElementsByClassName("animal");
var select = document.getElementById("select");
select.onchange = function(){
  if (select.value=="sepia"){
    for (var i =0; i <image.length; i++); {
      var item= animal[i];
      item.classList.add("sepia");
      item.addEventListener("select");
      images[i].classList.remove("white-black");
      images[i].classList.remove("negative-colors");
      images[i].classList.remove("original");
    }
  }
}

var images = document.getElementsByClassName("animal");
var select = document.getElementById("select");
select.onchange = function(){
  if (select.value=="negative-colors"){
    for (var i =0; i <image.length; i++) {
      var item= animal[i];
      item.classList.add("negative-colors");
      item.addEventListener("select");
      images[i].classList.remove("white-black");
      images[i].classList.remove("sepia");
      images[i].classList.remove("original");
    }
  }
}
