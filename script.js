document.addEventListener('DOMContentLoaded', function() {
    var cabecera = document.querySelector('header');
    var altoCabecera = cabecera.offsetHeight;
    var separadores = document.querySelectorAll('.separador');

    separadores.forEach(function(separador) {
        separador.style.marginBottom = altoCabecera + 'px';
    });
});