var COLLAPSED_CLASS = 'is-collapsed';

var panels = Array.prototype.map.call(
  document.querySelectorAll('.panel'),
  function (panel) {
    // Max width is set by a data-width attribute.
    !panel.dataset.width
      ? panel.classList.add('is-limitless')
      : savePanelConstraint(panel);
    panel.addEventListener('click', panelHandler);
    return panel;
  }
);

function panelHandler (event) {
  if (!(event.target.matches('.icon-close') || event.target.matches('line'))) {
		return;
	}
  var clickedPanel = this;
  this.classList.toggle(COLLAPSED_CLASS);
}

function savePanelConstraint (panel) {
  var width = parseInt(panel.dataset.width);
  // Set initial width value if panel is not collapsed
  if (!panel.classList.contains('is-collapsed')) {
    panel.style.width = width + 'px';
    panel.style.minWidth = width + 'px';
  }
}

function actionHandler (event) {
	var element = this;
	var content = this.parentNode.querySelector('.modal-action-form');
	this.classList.toggle('active');
	content.classList.toggle('active');
}

$(document).on('click', '.buttonDown', function () {
        Shiny.onInputChange('last_btn',this.id);
});

//var clickAvanzados = document.querySelector(".titulo-avanzados");
//var contentAvanzados  = document.querySelector(".contenido-avanzados");


//clickAvanzados.addEventListener("click", function() {
//	clickAvanzados.classList.toggle( 'title-active' );
//	clickAvanzados.childNodes[1].classList.toggle( 'show-active' );
//	contentAvanzados.classList.toggle('content-avanzados');
//});

const collapsibles = Array.prototype.map.call(
  document.getElementsByClassName("box-collapsible-trigger"),
  function (el) { return el }
);


collapsibles.forEach(function (collapsible) {
  const content = collapsible.nextElementSibling;
  if (content.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  
  collapsible.addEventListener('click', function () {
    this.classList.toggle('active');
    content.classList.toggle('active');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});



const modalTriggers = Array.prototype.map.call(
  document.querySelectorAll('.modal-trigger'),
  function (e) { return e; }
);

if (modalTriggers) {
  modalTriggers.forEach(function (modalTrigger) {
    function handleModalTrigger(event) {
      var modal = document.getElementById(this.dataset.modal);
      modal.classList.add('is-visible');
      modal.addEventListener('click', function(event) {
        if (event.target.matches('.modal-title button') || event.target.matches('.modal') || event.target.matches('.modal-title svg')) {
          modal.classList.remove('is-visible');
        }
      });
    }
    modalTrigger.addEventListener('click', handleModalTrigger);
  });
}






