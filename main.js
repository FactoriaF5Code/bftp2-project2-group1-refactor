console.log("Hello coders");
// intentando crear un Array

  let persona = [];

  persona = ["Anna G", "Ana C", "Laura Campos", "Gabrielle", "Helen", "Judith", "Sara", "Tamara", "Valentina", "Yuliya", 
  "Alisa", "Candy", "Desirée", "Alexia", "Carmen",  "Joana", "Sandra", "Sonia", "Kristina", "Faby", "Grácia", 
  "Laura Contreras", "Marisa", "Rosa"]; 


 console.log(persona);


 function eligePersona(){
    let elegida = persona[Math.floor(Math.random()*persona.length)];
    //pintar elegida en la seccion resultado
    $(".cajaresultado").text(elegida)

}
 
//eliminar a la persona elegida de la lista y guardarla en otra lista

$('.selecciona').on("click", function() {
  eligePersona();
})

});

