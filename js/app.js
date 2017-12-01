
document.getElementById("menu").addEventListener("change", filtros);
function filtros(event){

  var selectedIndex = event.target.selectedIndex;
  var filtroAplicar = event.target[selectedIndex].dataset.filtro;
  if (filtroAplicar == "white-black"){
  cambiarAWhiteBlack();

} else if (filtroAplicar == "sepia") {
    cambiarAsepia();

} else if (filtroAplicar == "original") {
     original();

} else if (filtroAplicar == "negative-colors") {
  cambiarANegative();
}
}

function cambiarAWhiteBlack() {
  var imagenesACambiar = document.getElementsByTagName("img");
  for (var i = 0; i < imagenesACambiar.length; i++) {
    imagenesACambiar[i].className = "white-black";
  }
}

function cambiarAsepia() {
  var imagenesACambiar = document.getElementsByTagName("img");
  for (var i = 0; i < imagenesACambiar.length; i++) {
    imagenesACambiar[i].className = "sepia";
  }
}

function cambiarANegative() {
  var imagenesACambiar = document.getElementsByTagName("img");
  for (var i = 0; i < imagenesACambiar.length; i++) {
    imagenesACambiar[i].className = "negative-colors";
  }
}

function original() {
  var imagenesACambiar = document.getElementsByTagName("img");
  for (var i = 0; i < imagenesACambiar.length; i++) {
    imagenesACambiar[i].className = "original";
  }
}
