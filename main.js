$(document).ready(function() {

    // intentando crear un Array

    let personas = ["Anna G", "Ana C", "Laura Campos", "Gabrielle", "Helen", "Judith", "Sara", "Tamara", "Valentina", "Yuliya", "Alisa", "Candy", "Desirée", "Alexia", "Carmen",  "Joana", "Sandra", "Sonia", "Kristina", "Faby", "Grácia", "Laura Contreras", "Marisa", "Rosa"];  
    
    let voluntarias = [];
    
    
    personas.sort();

    let selectButton = $('.selecciona');

    console.log(personas);

    
    let cajaResultado = $('.cajaresultado');

    
    selectButton.on("click", eligePersona);
    

    


    function eligePersona(){

      console.log(personas);
      if(personas.length===0){ volverAEmpezar(); }

      let number = Math.floor(Math.random()*personas.length);
      let elegida = personas[number];

      //eliminar a la persona elegida de la lista
      personas.splice(number, 1);
      
      // y guardarla en otra lista
      voluntarias.push(elegida);
      
      //pintar elegida en la seccion resultado
      cajaResultado.text(elegida);


    }

  //funcion volverAEmpezar
  function volverAEmpezar(){
    personas = voluntarias;
    personas.sort();
    voluntarias = [];
    console.log(personas);
    console.log(voluntarias);
   
  }
    

   
  //lista.splice(elegida, 1);
  //console.log(lista);
    
  
});
