/*
 CÓDIGO JQUERY 
      UTILIZA A CLASSE "GALLERY" PARA INICIAR O MAGNIFICPOPUP 
*/
$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

function to_home() {
    window.location.href = "Carousel.html"
}



