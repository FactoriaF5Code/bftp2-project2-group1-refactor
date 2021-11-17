$(document).ready(function() {

    // intentando crear un Array

    let persona = ["Anna G", "Ana C", "Laura Campos", "Gabrielle", "Helen", "Judith", "Sara", "Tamara", "Valentina", "Yuliya", "Alisa", "Candy", "Desirée", "Alexia", "Carmen",  "Joana", "Sandra", "Sonia", "Kristina", "Faby", "Grácia", "Laura Contreras", "Marisa", "Rosa"];  
  
    let voluntarias = [];
    
    persona.sort();


    let selectButton = $('.selecciona');
    selectButton.on("click", eligePersona);

    let cajaResultado = $('.cajaresultado');
    

  
    function eligePersona(){
    
      let number = Math.floor(Math.random()*persona.length);
      let elegida = persona[number];

      //eliminar a la persona elegida de la lista
      persona.splice(number, 1);
      voluntarias.push(elegida);
    
      cajaResultado.text(elegida);
    }

  //pintar elegida en la seccion resultado
  

   // y guardarla en otra lista
  //lista.splice(elegida, 1);
  //console.log(lista);
    
  
});
