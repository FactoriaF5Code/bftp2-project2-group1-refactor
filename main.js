    let voluntarias = [];
    
    personas.sort();


    let cajaResultado = $('.cajaresultado');

    
    selectButton.on("click", eligePersona);

    //if(personas.length===0){ volverAEmpezar(); }
  
  //imprimir array en html
  //for persona.length {
    //document.appendChild(("personas")).innerHTML = persona;
  //}


    function eligePersona(){

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

  //funcion reinicio o volverAEmpezar
  function volverAEmpezar(){
    personas = voluntarias;
    personas.sort();
    console.log(personas);
    console.log(voluntarias);
    voluntarias = [];
    console.log(personas);
    console.log(voluntarias);
  }
    

  

   
  //lista.splice(elegida, 1);
  //console.log(lista);
    
  
});
