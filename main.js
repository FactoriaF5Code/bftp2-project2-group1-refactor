console.log("Hello coders");
// intentando crear un Array

let lista = ["Anna G", "Ana C", "Laura Campos", "Gabrielle",
 "Helen", "Judith", "Sara", "Tamara", "Valentina", "Yuliya", 
 "Alisa", "Candy", "Desirée", "Alexia", "Carmen", 
 "Joana", "Sandra", "Sonia", "Kristina", "Faby", "Grácia", 
 "Laura Contreras", "Marisa"];


 console.log(lista);

function eligePersona(){
  
  let elegida= lista[Math.floor(Math.random()*lista.length)];

//nombre de la elegida en la seccion resultado
$(".cajaresultado").text(elegida)
  //eliminar a la persona elegida de la lista y guardarla en otra lista

}
 
$(document).ready(function () {

$('.selecciona').on("click", eligePersona)

});

