console.log("Hello coders");

// intentando crear un Array

let lista = ["Anna G", "Ana C", "Laura Campos", "Gabrielle",
 "Helen", "Judith", "Sara", "Tamara", "Valentina", "Yuliya", 
 "Alisa", "Candy", "Desirée", "Alexia", "Carmen", 
 "Joana", "Sandra", "Sonia", "Kristina", "Faby", "Grácia", 
 "Laura Contreras", "Marisa"];

 lista.sort();


 console.log(lista);

function eligePersona(){
  
  let number = Math.floor(Math.random()*lista.length);

  let elegida= lista[number];
  lista.splice(number, 1);
  console.log(lista);

//pintar elegida en la seccion resultado
$(".cajaresultado").text(elegida);

  //eliminar a la persona elegida de la lista y guardarla en otra lista
  //lista.splice(elegida, 1);
  //console.log(lista);
}
 
$(document).ready(function () {



$('.selecciona').on("click", eligePersona);




});
