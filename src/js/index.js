
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

// Função que deixa o modal arrastável
function makeModalDraggable(modal) {
  modal.find('.modal-dialog').draggable({
    handle: ".modal-header"
  });

  /* const modalElement = document.getElementById(modal);
  // Altera o estilo para `display: flex`
  const modalDialog = modalElement.querySelector('.modal-dialog');
  modalDialog.style.display = 'flex';
  modalDialog.style.alignItems = 'center'; // Alinha verticalmente
  modalDialog.style.justifyContent = 'center'; // Centraliza horizontalmente */
}

// Script para modal "Sobre"
$(document).ready(function () {
  $('#pasta-sobre').on("dblclick", function () {
    const modalSobre = new bootstrap.Modal(document.getElementById('modalSobre'), {
      backdrop: false,
      keyboard: true,
      focus: false,
    });
    modalSobre.show();
    
    // deixa o modal arrastável
    makeModalDraggable($('#modalSobre'));
  });
});

// Script para modal "Contato"
$(document).ready(function () {
  $('#pasta-contato').on("dblclick", function () {
    const modalContato = new bootstrap.Modal(document.getElementById('modalContato'), {
      backdrop: false,
      keyboard: true,
      focus: false,
    });
    modalContato.show();
    
    makeModalDraggable($('#modalContato'));
  });
});

// Script para modal "Projetos"
$(document).ready(function () {
  $('#pasta-projetos').on("dblclick", function () {
    const modalProjetos = new bootstrap.Modal(document.getElementById('modalProjetos'), {
      backdrop: false,
      keyboard: true,
      focus: false,
    });
    modalProjetos.show();
    
    makeModalDraggable($('#modalProjetos'));
  });
});
