$(document).ready(function () {

  $("#lugar").change(function () {

    cambiar();
  });

  let sedeInscripcion = window.localStorage.getItem("sede");
  $("#sedeInscripcion").text(sedeInscripcion);



  $("#filtrando").click(function (e) {
    filtrar();
    e.preventDefault();

  });

  $("#botonForm").click(function (e) {
    validar(e);
  });

  $("#btnContacto").click(function (e) {
    validarCt(e);
  });
});



function cambiar() {
  if ($("#lugar").val() == 1) {
    $("#lamatanza").hide();
    $("#lamatanza1").hide();
    $("#caba").show();
    $("#caba1").show();

  }
  if ($("#lugar").val() == 2) {
    $("#lamatanza").show();
    $("#lamatanza1").show();
    $("#caba").hide();
    $("#caba1").hide();
  }
  if ($("#lugar").val() == 0) {
    $("#lamatanza").show();
    $("#lamatanza1").show();
    $("#caba").show();
    $("#caba1").show();
  }


}

function filtrar() {

  /*Sede e Idioma Filtro */
  let sedesV = $("#sedeFiltro").val();
  let idiomaF = $("#idiomaFiltro").val();
  /*Bloque de Abril y Marzo separados*/
  let sedesAbril = $("#allSedes2");
  let sedesMarzo = $("#allSedes");
  /*Sedes e imagenes*/
  let sedesBelgranoPortugues = $("#psedePortugues1");
  let imgBelgranoPortugues = $("#portugues1");
  let sedesBelgranoIngles = $("#psedeIngles1");
  let imgBelgranoIngles = $("#ingles1");
  let sedesSanjustoJapones = $("#psedeJapones1");
  let imgSanJustoJapones = $("#japones1");
  let sedesSanjustoItaliano = $("#psedeItaliano1");
  let imgSanJustoItaliano = $("#italiano1");
  let sedesCatanItaliano = $("#psedeItaliano2");
  let imgCatanItaliano = $("#italiano2");
  let sedesCatanJapon = $("#psedeJapones2");
  let imgCatanJapon = $("#japones2");
  let sedesMataderosIngles = $("#psedeIngles2");
  let imgMataderosIngles = $("#ingles2");
  let sedesMataderosPortugues = $("#psedePortugues2");
  let imgMataderosPortugues = $("#portugues2");


  if (sedesV == 0 && idiomaF == 0) {
    sedesAbril.show();
    sedesMarzo.show();
  }

  if (sedesV == 0 && idiomaF == 0) {
    sedesBelgranoIngles.show();
    imgBelgranoIngles.show();
    sedesBelgranoPortugues.show();
    imgBelgranoPortugues.show();
    sedesSanjustoItaliano.show();
    imgSanJustoItaliano.show();
    sedesSanjustoJapones.show();
    imgSanJustoJapones.show();
    sedesCatanItaliano.show();
    imgCatanItaliano.show();
    sedesCatanJapon.show();
    imgCatanJapon.show();
    sedesMataderosIngles.show();
    imgMataderosIngles.show();
    sedesMataderosPortugues.show();
    imgMataderosPortugues.show();

  }

  if (sedesV == "belgrano" && idiomaF == "ingles") {

    sedesAbril.hide();
    sedesBelgranoIngles.show();
    imgBelgranoIngles.show();
    sedesBelgranoPortugues.hide();
    imgBelgranoPortugues.hide();
    sedesSanjustoItaliano.hide();
    imgSanJustoItaliano.hide();
    sedesSanjustoJapones.hide();
    imgSanJustoJapones.hide();
  } else if (sedesV == "belgrano" && idiomaF == "portugues") {
    sedesAbril.hide();
    sedesBelgranoIngles.hide();
    imgBelgranoIngles.hide();
    sedesBelgranoPortugues.show();
    imgBelgranoPortugues.show();
    sedesSanjustoItaliano.hide();
    imgSanJustoItaliano.hide();
    sedesSanjustoJapones.hide();
    imgSanJustoJapones.hide();
  }

  if (sedesV == "catan" && idiomaF == "italiano") {
    sedesMarzo.hide();
    sedesCatanItaliano.show();
    imgCatanItaliano.show();
    sedesCatanJapon.hide();
    imgCatanJapon.hide();
    sedesMataderosIngles.hide();
    imgMataderosIngles.hide();
    sedesMataderosPortugues.hide();
    imgMataderosPortugues.hide();
  } else if (sedesV == "catan" && idiomaF == "japones") {
    sedesMarzo.hide();
    sedesCatanItaliano.hide();
    imgCatanItaliano.hide();
    sedesCatanJapon.show();
    imgCatanJapon.show();
    sedesMataderosIngles.hide();
    imgMataderosIngles.hide();
    sedesMataderosPortugues.hide();
    imgMataderosPortugues.hide();
  }

  if (sedesV == "mataderos" && idiomaF == "ingles") {
    sedesMarzo.hide();
    sedesCatanItaliano.hide();
    imgCatanItaliano.hide();
    sedesCatanJapon.hide();
    imgCatanJapon.hide();
    sedesMataderosIngles.show();
    imgMataderosIngles.show();
    sedesMataderosPortugues.hide();
    imgMataderosPortugues.hide();
  } else if (sedesV == "mataderos" && idiomaF == "portugues") {
    sedesMarzo.hide();
    sedesCatanItaliano.hide();
    imgCatanItaliano.hide();
    sedesCatanJapon.hide();
    imgCatanJapon.hide();
    sedesMataderosIngles.hide();
    imgMataderosIngles.hide();
    sedesMataderosPortugues.show();
    imgMataderosPortugues.show();
  }

  if (sedesV == "sanJusto" && idiomaF == "italiano") {
    sedesAbril.hide();
    sedesBelgranoIngles.hide();
    imgBelgranoIngles.hide();
    sedesBelgranoPortugues.hide();
    imgBelgranoPortugues.hide();
    sedesSanjustoItaliano.show();
    imgSanJustoItaliano.show();
    sedesSanjustoJapones.hide();
    imgSanJustoJapones.hide();
  } else if (sedesV == "sanJusto" && idiomaF == "japones") {
    sedesAbril.hide();
    sedesBelgranoIngles.hide();
    imgBelgranoIngles.hide();
    sedesBelgranoPortugues.hide();
    imgBelgranoPortugues.hide();
    sedesSanjustoItaliano.hide();
    imgSanJustoItaliano.hide();
    sedesSanjustoJapones.show();
    imgSanJustoJapones.show();
  }
}

function validar(e) {

  let error = false;
  let regexTelefono = /^[0-9]{4}-[0-9]{4}$/;
  let regexTelefono2 = /^[0-9]{4}[0-9]{4}$/;
  let regexEmail = /^[0-9a-zA-Z..-]+@[0-9a-zA-Z..-]+.[0-9a-zA-Z]+$/;

  $("#mensaje").empty();
  $("#nombreForm, #telefono, #provincia, #apellido, #correo, #ciudad").removeClass();

  if ($("#nombreForm").val() == "") {
    error = true;
    $("#mensaje").append("<p> El nombre es obligatorio </p>").addClass("errorLetra");
    $("#nombreForm").addClass("error");
  } else if (($("#nombreForm").val().length < 4) || ($("#nombreForm").val().length > 20)) {
    error = true;
    $("#mensaje").append("<p> El nombre debe tener entre 4 y 20 caracteres </p>").addClass("errorLetra");
    $("#nombreForm").addClass("error");
  }

  if ($("#telefono").val() == "") {
    error = true;
    $("#mensaje").append("<p> El telefono es obligatorio </p>").addClass("errorLetra");
    $("#telefono").addClass("error");
  } else if (($("#telefono").val().match(regexTelefono)) || ($("#telefono").val().match(regexTelefono2))) {
    error = false;
  } else {
    error = true;
    $("#mensaje").append("<p> Debe ingresar un telefono valido </p>").addClass("errorLetra");
    $("#telefono").addClass("error");
  }

  if ($("#provincia").val() == "") {
    error = true;
    $("#mensaje").append("<p> La provincia es obligatoria </p>").addClass("errorLetra");
    $("#provincia").addClass("error");
  }

  if ($("#apellido").val() == "") {
    error = true;
    $("#mensaje").append("<p> El apellido es obligatorio </p>").addClass("errorLetra");
    $("#apellido").addClass("error");
  }

  if ($("#correo").val() == "") {
    error = true;
    $("#mensaje").append("<p> El correo es obligatorio </p>").addClass("errorLetra");
    $("#correo").addClass("error");
  } else if ($("#correo").val().match(regexEmail)) {
    error = false;
  } else {
    error = true;
    $("#mensaje").append("<p> Debe ingresar un email valido </p>").addClass("errorLetra");
    $("#correo").addClass("error");
  }

  if ($("#ciudad").val() == "") {
    error = true;
    $("#mensaje").append("<p> La ciudad es obligatoria </p>").addClass("errorLetra");
    $("#ciudad").addClass("error");
  }

  if (error) {
    e.preventDefault();
  }
}

function validarCt(e) {
  let error = false;
  let regexEmail = /^[0-9a-zA-Z..-]+@[0-9a-zA-Z..-]+.[0-9a-zA-Z]+$/;

  $("#mensajeContacto").empty();
  $("#contador").empty();
  $("#contador2").empty();
  $("#nombreContacto, #correoContacto, #sedeContacto, #consultaContacto").removeClass();

  if ($("#nombreContacto").val() == "") {
    error = true;
    $("#mensajeContacto").append("<p> El nombre y Apellido es obligatorio </p>").addClass("errorLetra");
    $("#nombreContacto").addClass("error");
  }
  if ($("#correoContacto").val() == "") {
    error = true;
    $("#mensajeContacto").append("<p> El correo es obligatorio </p>").addClass("errorLetra");
    $("#correoContacto").addClass("error");
  } else if ($("#correoContacto").val().match(regexEmail)) {
    error = false;
    $("#correoContacto").removeClass();
  } else if (!$("#correoContacto").val().match(regexEmail)) {
    error = true;
    $("#mensajeContacto").append("<p> Debe ingresar un email valido </p>").addClass("errorLetra");
    $("#correoContacto").addClass("error");
  }

  if ($("#sedeContacto").val() == "0") {
    error = true;
    $("#mensajeContacto").append("<p> Debe seleccionar una Sede </p>").addClass("errorLetra");
    $("#sedeContacto").addClass("error");
  }

  if ($("#consultaContacto").val() == "") {
    error = true;
    $("#mensajeContacto").append("<p> Debe escribir su consulta </p>").addClass("errorLetra");
    $("#consultaContacto").addClass("error");
  }

  if ($("#consultaContacto").val().length > 1000) {
    error = true;
    $("#consultaContacto").removeClass();
    $("#contador2").append("<p>El campo Consulta no puede superar los 1000 caracteres</p>").addClass("errorLetra");
    $("#consultaContacto").addClass("error");
  }

  if ($("#consultaContacto").val().length < 1001) {
    $("#consultaContacto").removeClass();
    $("#contador").append("<p>Contador de palabras " + $("#consultaContacto").val().length + "</p>").removeClass();
  }
  if ($("#consultaContacto").val().length > 1000) {
    error = true;
    $("#contador").append("<p>Contador de palabras " + $("#consultaContacto").val().length + "</p>").addClass("errorLetra");
    $("#consultaContacto").addClass("error");
  }

  if (error) {
    e.preventDefault();
  }

  if (error == false) {
    window.alert("Envio Exitoso");
  }
}