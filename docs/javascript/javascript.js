/* FADE IN NO CARREGAMENTO DA TELA */
$(document).ready(function(){
    $("#container, .container-portfolio, #container_contato, .container-curriculo").fadeIn(1500); 
});

/* HAMBURGER */
var myDivElement = $(".hamburger");
        
$(document).ready(function(){
    $('.menu').click(function(){
        $('.hamburger').toggleClass('active');
    })
})

/* APARECER BOTÃO SE SCROLLAR PARA BAIXO UM POUCO */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("btn-topo").style.display = "block";
        document.getElementById("btn-baixo").style.display = "block";

        } else {
        document.getElementById("btn-topo").style.display = "none";
        document.getElementById("btn-baixo").style.display = "none";
    }
}

/* SCROLL ANIMADO NAS ANCORAS */
$(function() {
    
  $('a[href*="#"]:not([href="#"])').click(function() {

    var target = $(this.hash);

    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 1000);
      return false;
    }

  });
});
    
/* BOTAO DO TEXTO 1 */
$('.ver-mais').click(function(){
    if($('#texto_conteudo-1').css('display') == 'none') {
    $('#texto_conteudo-1').fadeIn('slow');
    }
    else
     $('#texto_conteudo-1').hide();
});
    
$('.ver-mais').click(function(){
   if($('#texto_conteudo-1').is(':visible')) {
        $('.ver-mais').html('ver menos <i class="fas fa-arrow-up"></i>');
 }
    else{
         $('.ver-mais').html('ver mais <i class="fas fa-arrow-down"></i>');
    }
});
    
/* BOTAO DO TEXTO 2 */
$('.ver-mais-2').click(function(){
    if($('#texto_conteudo-2').css('display') == 'none') {
    $('#texto_conteudo-2').fadeIn('slow');
    }
    else
     $('#texto_conteudo-2').hide();
});
    
$('.ver-mais-2').click(function(){
   if($('#texto_conteudo-2').is(':visible')) {
        $('.ver-mais-2').html('ver menos <i class="fas fa-arrow-up"></i>');
 }
    else{
         $('.ver-mais-2').html('ver mais <i class="fas fa-arrow-down"></i>');
    }
});

/* BOTAO DO TEXTO 3 */
$('.ver-mais-3').click(function(){
    if($('#texto_conteudo-3').css('display') == 'none') {
    $('#texto_conteudo-3').fadeIn('slow');
    }
    else
     $('#texto_conteudo-3').hide();
});
    
$('.ver-mais-3').click(function(){
   if($('#texto_conteudo-3').is(':visible')) {
        $('.ver-mais-3').html('ver menos <i class="fas fa-arrow-up"></i>');
 }
    else{
         $('.ver-mais-3').html('ver mais <i class="fas fa-arrow-down"></i>');
    }
});
    
/* SHOW E HIDE FOOTER */
$('#mostra-mais-menos-a').click(function(){
    if($('#rodape-novo').css('display') == 'block') {
        $('#rodape-novo').slideToggle();
        
        $('#mostra-mais-menos-a').fadeToggle('fast');
            $('#mostra-mais-menos-a').fadeToggle('fast');
        
        $('#mostra-mais-menos-a').html('<i class="fas fa-chevron-circle-up"></i>');
        
        $('.slider-container').css({
         bottom:0   
        });
    }
    else {
        $('#rodape-novo').slideToggle();
        
        $('#mostra-mais-menos-a').fadeToggle('fast');
        $('#mostra-mais-menos-a').fadeToggle('fast');
        
        $('#mostra-mais-menos-a').html('<i class="fas fa-chevron-circle-down"></i>');
        
        $('.slider-container').css({
         bottom:90   
        });
}
});
    
/* SLIDER DE PROGRESSO DA BARRA DE SCROLL */
$(document).ready(function(){
    var telaAltura = $(document).height(), percentualScroll;
    
    $(window).scroll(function(){
        percentualScroll = ($(window).scrollTop() / telaAltura * 100);
            
    $('.slider-bar').width(percentualScroll + '%');
    });
});