 const sedes = [
  {"sede":1, "idioma":1,  "Direccion":"Av. Mariano Santamaría 2719"},
  {"sede":1, "idioma":4,  "Direccion":"Av. Mariano Santamaría 2719"},
  {"sede":1, "idioma":3,  "Direccion":"Av. Mariano Santamaría 2719"},
  {"sede":2, "idioma":1,  "Direccion":"Av. Don Bosco 1756"},
  {"sede":2, "idioma":2,  "Direccion":"Av. Don Bosco 1756"},
  {"sede":3, "idioma":1,  "Direccion":"Av. Mariano Santamaría 2719"},
 ];


 
 
 
 $(document).ready(function(){
    
  /*carrousel*/ 
$('.slide').slick({
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      fade: true
    });

    /*responsive nav bar*/
    let boton = document.getElementById('botonLinea');
    let nav= document.getElementById('navEscondido');   
    boton.addEventListener('click',()=>{
    nav.classList.toggle('activarMenu');
    });

    $("#dictef").hide();
$("#sede").change(function(){
  filtrar();

});




  $("sede").change(function(){
    $("#sedeInscripcion").text(localStorage.getItem("sede"))
  });

  

   $("#botoninscrip").click(function(){
      guardar();
    });
    
   

  


  

}); 



function guardar(){

  let sede= $("#sede").val();
  let idioma= $("#idioma").val();
  let horarios= $("#horarios").val();
 
  localStorage.setItem("sede",sede);
  localStorage.setItem("idioma",idioma);
  localStorage.setItem("horarios",horarios);
}

function filtrar(){
  let sedesV= $("#sede").val();
  let ingles= $("#idiomaIngles");
  let italiano=$("#idiomaItaliano");;
  let japones=$("#idiomaJapones");;
  let portugues=$("#idiomaPortugues");;
  
  if(sedesV==0){
    ingles.show();
    italiano.show();
    japones.show();
    portugues.show();
    $("#dictef").hide();
    
  }
  if(sedesV=="Belgrano"){
    ingles.show();
    italiano.hide();
    japones.hide();
    portugues.show();
    $("#dictef").show();
  }
  if(sedesV=="Catán"){
    ingles.hide();
    italiano.show();
    japones.show();
    portugues.hide();
    $("#dictef").show();
    $("#dictef").empty();
    $("#dictef").append(`
    <li>Dirección: Ruta 3 Km 38 3091 </li>
    <li >Teléfono: 1112-2326 </li>
    `);
  }
  if(sedesV=="Mataderos"){
    ingles.show();
    italiano.hide();
    japones.hide();
    portugues.show();
    $("#dictef").show();
    $("#dictef").empty();
    $("#dictef").append(`
    <li>Dirección: Av. Alberdi 6337 </li>
    <li >Teléfono: 5215-6122 </li>
    `);
  }
  if(sedesV=="San Justo"){
    ingles.hide();
    italiano.show();
    japones.show();
    portugues.hide();
    $("#dictef").show();
    $("#dictef").empty();
    $("#dictef").append(`
    <li>Dirección: Av. Illia 3091 </li>
    <li >Teléfono: 3333-8555 </li>
    `);
  }
  

  


}



/* $("#info").empty();
  filtrando.forEach(sedes => {
    $("#info").append(`
    
    <h4>Datos de contacto</h4>
    <ul class="listafooter">
    <li>Dirección:${sedes.Direccion} </li>
    <li>Teléfono: 4441-5555 </li>
    <li>Email: aprendeidiomas@gmail.com </li>
    <li>Web:  </li>
    </ul>
    
    
    `);
  });*/
