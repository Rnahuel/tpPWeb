 $(document).ready(function(){
    $('.slide').slick({
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      fade: true
    });

    let boton = document.getElementById('botonLinea');
let nav= document.getElementById('navEscondido');   

boton.addEventListener('click',()=>{
  nav.classList.toggle('activarMenu');
});
}); 

