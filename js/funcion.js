$(document).ready(function(){
  
  $("#lugar").change(function(){
   
    cambiar(); 
  });

  let sedeInscripcion = window.localStorage.getItem("sede");
  $("#sedeInscripcion").text(sedeInscripcion);
  


  $("#filtrando").click(function(e){
    filtrar();
    e.preventDefault();
  
  });

  $("#form").submit(function (validar){
    validar(validar);
    validar.preventDefault();
});
});



function cambiar(){
  if($("#lugar").val()==1){
    $("#lamatanza").hide();
    $("#lamatanza1").hide();
    $("#caba").show();
    $("#caba1").show();

  }
  if($("#lugar").val()==2){
    $("#lamatanza").show();
    $("#lamatanza1").show();
    $("#caba").hide();
    $("#caba1").hide();
  }
  if($("#lugar").val()==0){
    $("#lamatanza").show();
    $("#lamatanza1").show();
    $("#caba").show();
    $("#caba1").show();
  }


}

function filtrar(){
  let sede=$("#sedeFiltro").val();
  let idioma=$("#idiomaFiltro").val();

  $("#imgsede").hide();
  $(`#imgsede .${sede}.${idioma}`).show();
  $("#psede").hide();
  $(`#psede .${sede}.${idioma}`).show();
}

/*filtrar solo por establecimiento*/
function filtrar(){

  /*Sede e Idioma Filtro */
  let sedesV= $("#sedeFiltro").val();
  let idiomaF= $("#idiomaFiltro").val();
  /*Bloque de Abril y Marzo separados*/ 
  let sedesAbril= $("#allSedes2");
  let sedesMarzo= $("#allSedes");
  /*Sedes e imagenes*/
  let sedesBelgranoPortugues=$("#psedePortugues1");
  let imgBelgranoPortugues=$("#portugues1");
  let sedesBelgranoIngles=$("#psedeIngles1");
  let imgBelgranoIngles=$("#ingles1");
  let sedesSanjustoJapones=$("#psedeJapones1");
  let imgSanJustoJapones=$("#japones1");
  let sedesSanjustoItaliano=$("#psedeItaliano1");
  let imgSanJustoItaliano=$("#italiano1");
  let sedesCatanItaliano=$("#psede");
  let imgCatanItaliano=$("#portugues1");
  let sedesCatanJapon=$("#psede");
  let imgCatanJapon=$("#portugues1");
  let sedesMataderosIngles=$("#psede");
  let imgMataderosIngles=$("#portugues1");
  let sedesMataderosPortugues=$("#psede");
  let imgMataderosPortugues=$("#portugues1");


  if(sedesV==0 && idiomaF==0){
    sedesAbril.show();
    sedesMarzo.show();
  }

  if(sedesV== 0 && idiomaF==0){
    sedesMarzo.show();
  }

  if(sedesV=="belgrano" && idiomaF=="ingles"){
    console.log("mensajexD");
    sedesAbril.hide();
    sedesBelgranoIngles.show();
    imgBelgranoIngles.show();
    sedesBelgranoPortugues.hide();
    imgBelgranoPortugues.hide();
    sedesSanjustoItaliano.hide();
    imgSanJustoItaliano.hide();
    sedesSanjustoJapones.hide();
    imgSanJustoJapones.hide(); 
  }

  if(sedesV=="catan" && idiomaF== ""){
    
  }
  if(sedesV=="mataderos"){
   
  }
  if(sedesV=="san justo"){
    
  }

  

}
  //  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/ validar email   

function validar(validar){
  let error = false;
  let mensajesError = "";
  let nombre = document.getElementById("nombre");
 if(nombre.value=""){
   error = true;
   mensajesError+= "<p> El nombre es obligatorio </p>";
 } 
 if(nombre.value.lenght < 4 || nombre.value.lenght > 20){
   error = true;
   mensajesError = "<p> Ingrese una cantidad válida de caracteres </p>";
 }
 

 if(document.getElementById("sede").value == 0){
  error = true;
  mensajesError+= "<p> La sede es obligatoria </p>";
 }

if(document.getElementById("consulta").value == ""){
  error = true;
   mensajesError+= "<p> Escriba alguna consulta </p>";
}
}