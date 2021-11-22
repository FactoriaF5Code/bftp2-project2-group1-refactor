$(document).ready(function() {
    let selectButton = $('.selecciona');
    let cajaResultado = $('.cajaresultado');
    let listaPersonas = $('#personas');

    let participantes = ["Anna G", "Ana C", "Laura Campos", "Gabrielle", "Helen", "Judith", "Sara", "Tamara", "Valentina", "Yuliya", "Alisa", "Candy", "Desirée", "Alexia", "Carmen",  "Joana", "Sandra", "Sonia", "Kristina", "Faby", "Gràcia", "Laura Contreras", "Marisa", "Rosa"];  

    let wheelOfDoom = new WheelOfDoomTramposa(participantes.sort());
    
    mostrarCoders(participantes);
    
    selectButton.on("click", eligePersona);

    $(".reinicia").on("click", function() {
      wheelOfDoom.reiniciar();
      mostrarCoders(wheelOfDoom.codersQueQuedan());
      cajaResultado.empty();
    })


    function mostrarCoders(personas){
      listaPersonas.empty();
      personas.forEach(persona => {
        listaPersonas.append("<span>" + "   " + persona + "   " + "</span>")
        
      });
    }
    
    function eligePersona(){

      let elegida = wheelOfDoom.elegirCoder();
      let coders = wheelOfDoom.codersQueQuedan();
      
      cajaResultado.text(elegida);
      
      mostrarCoders(coders);

    }
  
});
