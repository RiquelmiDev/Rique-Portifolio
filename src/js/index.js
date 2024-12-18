
//Esconder block-screen
jQuery(document).ready(function($) {
    $("#btn-enter-sistem").on('click', function() {
        $("#block-screen").hide();
        $("#login-screen").show();
    });
});

//Esconder login-screen
jQuery(document).ready(function($) {
    $("#btn-login").on('click', function() {
        $("#login-screen").hide();
        $("#home-screen").show();
    });
});

// script para mostrar e tornar o modal arrastavel
$(document).ready(function () {
    $('#pasta-sobre').on("dblclick", function () {
      const modalSobre = new bootstrap.Modal(document.getElementById('modalSobre'), {
        backdrop: false,
        keyboard: true,
      });
      modalSobre.show();
  
      // Tornando o modal  arrastável
      $('.modal-dialog').draggable({
        handle: ".modal-header"
      });
    });
  });

// modal contato
$(document).ready(function () {
    $('#pasta-contato').on("dblclick", function () {
      const modalSobre = new bootstrap.Modal(document.getElementById('modalContato'), {
        backdrop: false,
        keyboard: true,
      });
      modalSobre.show();
  
      // Tornando o modal  arrastável
      $('.modal-dialog').draggable({
        handle: ".modal-header"
      });
    });
  });