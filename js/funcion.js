

$(document).ready(function(){
  
  $("#lugar").change(function(){
   
    cambiar(); 
  });

  let sedeInscripcion = window.localStorage.getItem("sede");
  $("#sedeInscripcion").text(sedeInscripcion);
  


  $("#filtrando").click(function(){
    filtrar();
  
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
/*function filtrar(){


  let sedesV= $("#sedeFiltro").val();
  let ingles= $("#idiomaIngles");
  let italiano=$("#idiomaItaliano");;
  let japones=$("#idiomaJapones");;
  let portugues=$("#idiomaPortugues");;
  let sedesBelgranoPortugues=$("#belgranoPortugues");
  let sedesBelgranoPortugues1=$("#belgranoPortugues1");
  let sedesBelgranoIngles=$("#belgranoIngles");
  let sedesBelgranoIngles1=$("#belgranoIngles1");
  let sedesSanjustoJapones=$("#sanjustoJapones");
  let sedesSanjustoJapones1=$("#sanjustoJapones1");
  let sedesSanjustoItaliano=$("#sanjustoItaliano");
  let sedesSanjustoItaliano1=$("#sanjustoItaliano1");
  let sedesCatanItaliano=$("#catanItaliano");
  let sedesCatanItaliano1=$("#catanItaliano1");
  let sedesCatanJapon=$("#catanJapon");
  let sedesCatanJapon1=$("#catanJapon1");
  let sedesMataderosIngles=$("#mataderosIngles");
  let sedesMataderosIngles1=$("#mataderosIngles1");
  let sedesMataderosPortugues=$("#mataderosPortugues");
  let sedesMataderosPortugues1=$("#mataderosPortugues1");


  if(sedesV==0){
    ingles.show();
    italiano.show();
    japones.show();
    portugues.show();
    sedesBelgranoPortugues.show();
    sedesBelgranoIngles.show();
    sedesSanjustoJapones.show();
    sedesSanjustoItaliano.show();
    sedesCatanItaliano.show();
    sedesCatanJapon.show();
    sedesMataderosIngles.show();
    sedesMataderosPortugues.show();
    sedesBelgranoPortugues1.show();
    sedesBelgranoIngles1.show();
    sedesSanjustoJapones1.show();
    sedesSanjustoItaliano1.show();
    sedesCatanItaliano1.show();
    sedesCatanJapon1.show();
    sedesMataderosIngles1.show();
    sedesMataderosPortugues1.show();
  }
  if(sedesV=="Belgrano"){
    ingles.show();
    italiano.hide();
    japones.hide();
    portugues.show();
    sedesBelgranoPortugues.show();
    sedesBelgranoIngles.show();
    sedesSanjustoJapones.hide();
    sedesSanjustoItaliano.hide();
    sedesCatanItaliano.hide();
    sedesCatanJapon.hide();
    sedesMataderosIngles.hide();
    sedesMataderosPortugues.hide();
    sedesBelgranoPortugues1.show();
    sedesBelgranoIngles1.show();
    sedesSanjustoJapones1.hide();
    sedesSanjustoItaliano1.hide();
    sedesCatanItaliano1.hide();
    sedesCatanJapon1.hide();
    sedesMataderosIngles1.hide();
    sedesMataderosPortugues1.hide();
  }
  if(sedesV=="Catán"){
    ingles.hide();
    italiano.show();
    japones.show();
    portugues.hide();
    sedesBelgranoPortugues.hide();
    sedesBelgranoIngles.hide();
    sedesSanjustoJapones.hide();
    sedesSanjustoItaliano.hide();
    sedesCatanItaliano.show();
    sedesCatanJapon.show();
    sedesMataderosIngles.hide();
    sedesMataderosPortugues.hide();
    sedesBelgranoPortugues1.hide();
    sedesBelgranoIngles1.hide();
    sedesSanjustoJapones1.hide();
    sedesSanjustoItaliano1.hide();
    sedesCatanItaliano1.show();
    sedesCatanJapon1.show();
    sedesMataderosIngles1.hide();
    sedesMataderosPortugues1.hide();
  }
  if(sedesV=="Mataderos"){
    ingles.show();
    italiano.hide();
    japones.hide();
    portugues.show();
    sedesBelgranoPortugues.hide();
    sedesBelgranoIngles.hide();
    sedesSanjustoJapones.hide();
    sedesSanjustoItaliano.hide();
    sedesCatanItaliano.hide();
    sedesCatanJapon.hide();
    sedesMataderosIngles.show();
    sedesMataderosPortugues.show();
    sedesBelgranoPortugues1.hide();
    sedesBelgranoIngles1.hide();
    sedesSanjustoJapones1.hide();
    sedesSanjustoItaliano1.hide();
    sedesCatanItaliano1.hide();
    sedesCatanJapon1.hide();
    sedesMataderosIngles1.show();
    sedesMataderosPortugues1.show();
    
  }
  if(sedesV=="San Justo"){
    ingles.hide();
    italiano.show();
    japones.show();
    portugues.hide();
    sedesBelgranoPortugues.hide();
    sedesBelgranoIngles.hide();
    sedesSanjustoJapones.show();
    sedesSanjustoItaliano.show();
    sedesCatanItaliano.hide();
    sedesCatanJapon.hide();
    sedesMataderosIngles.hide();
    sedesMataderosPortugues.hide();
    sedesBelgranoPortugues1.hide();
    sedesBelgranoIngles1.hide();
    sedesSanjustoJapones1.show();
    sedesSanjustoItaliano1.show();
    sedesCatanItaliano1.hide();
    sedesCatanJapon1.hide();
    sedesMataderosIngles1.hide();
    sedesMataderosPortugues1.hide();
    
  }

  

}
  



  






  //  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/ validar email   




*/