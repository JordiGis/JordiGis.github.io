    document.addEventListener('DOMContentLoaded', function() {
        var cabecera = document.querySelector('header');
        var altoCabecera = cabecera.offsetHeight;
        var separadores = document.querySelectorAll('.separador');

        separadores.forEach(function(separador) {
            separador.style.marginBottom = altoCabecera + 'px';
        });
    });

    /* Ampliar los contenidos de los Proyectos */
    function cambiarAncho() {
        var secciones = document.querySelectorAll('.contenedor.proyectos');
        var contenidos = document.querySelectorAll('.contenedor.proyectos div');
        var btn = document.getElementById('ampliar');
    
        // Verificamos si el checkbox está marcado o no
        if (btn.checked) {
            secciones.forEach(function(seccion) {
                seccion.style.width = '100%';
            });
            contenidos.forEach(function(contenido) {
                contenido.style.width = '100%';
            });
        } else {
            secciones.forEach(function(seccion) {
                seccion.style.width = '70%';
            });
            contenidos.forEach(function(contenido) {
                contenido.style.width = '70%';
            });
        }
    }
    

    function cambiarModo() {
        const computedStyles = getComputedStyle(document.documentElement);
        var modoOscuroCheckbox = document.getElementById('cambiarModo');
        modoOscuroCheckbox.addEventListener('change', function() {
            let colorPrincipal1, colorPrincipal2, colorFondo, colorBlando, colorGris1, colorGris2, colorSeccion;
            if (modoOscuroCheckbox.checked) {
                colorPrincipal1 = computedStyles.getPropertyValue('--color-principal1-dark');
                colorPrincipal2 = computedStyles.getPropertyValue('--color-principal2-dark');
                colorFondo = computedStyles.getPropertyValue('--color-fondo-dark');
                colorBlando = computedStyles.getPropertyValue('--color-blando-dark');
                colorGris1 = computedStyles.getPropertyValue('--color-gris1-dark');
                colorGris2 = computedStyles.getPropertyValue('--color-gris2-dark');
                colorSeccion = computedStyles.getPropertyValue('--color-seccion-dark');
            } else {
                colorPrincipal1 = computedStyles.getPropertyValue('--color-principal1-light');
                colorPrincipal2 = computedStyles.getPropertyValue('--color-principal2-light');
                colorFondo = computedStyles.getPropertyValue('--color-fondo-light');
                colorBlando = computedStyles.getPropertyValue('--color-blando-light');
                colorGris1 = computedStyles.getPropertyValue('--color-gris1-light');
                colorGris2 = computedStyles.getPropertyValue('--color-gris2-light');
                colorSeccion = computedStyles.getPropertyValue('--color-seccion-light');
                colorSeccion = computedStyles.getPropertyValue('--color-seccion-light');
            }
            
            /* Asignacion a root */
            document.documentElement.style.setProperty('--color-principal1', colorPrincipal1);
            document.documentElement.style.setProperty('--color-principal2', colorPrincipal2);
            document.documentElement.style.setProperty('--color-fondo', colorFondo);
            document.documentElement.style.setProperty('--color-blando', colorBlando);
            document.documentElement.style.setProperty('--color-gris1', colorGris1);
            document.documentElement.style.setProperty('--color-gris2', colorGris2);
            document.documentElement.style.setProperty('--color-seccion', colorSeccion);
        });
    }