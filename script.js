    document.addEventListener('DOMContentLoaded', function() {
        var cabecera = document.querySelector('header');
        var barra = document.getElementById('barra');
        var altoCabecera = cabecera.offsetHeight+barra.offsetHeight;
        var separadores = document.querySelectorAll('.separador');

        separadores.forEach(function(separador) {
            separador.style.marginBottom = altoCabecera + 'px';
        });
        // Verificar si está en modo oscuro
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const checkBox = document.getElementById('cambiarModo');
        if (isDarkMode) {
            checkBox.checked = true;
        } else {
            checkBox.checked = false;
        }     
        
    });



    // function mostrarOcultarBarra() {
    //     var checkbox = document.getElementById('btn-barra');
    //     var icono = document.getElementById('icono-flecha');
    //     var cabecera = document.getElementById('cabecera')
    //     var barra = document.getElementById('barra');
    //     var listaBarra = document.getElementById('lista-barra');

    //     var esconder = 'translateY(-200%)';
    //     var mostrar = 'translateY(0%)';
    //     var claseRedondearBordes = 'redondear-bordes-abajo'

    //     checkbox.addEventListener('change', function() {
    //         if (checkbox.checked) {
    //             cabecera.classList.add(claseRedondearBordes);
    //             icono.style.transform = 'rotateX(360deg)';

    //             barra.style.transform = esconder;
    //             listaBarra.style.transform = esconder;
                
    //         } else {
    //             icono.style.transform = 'rotateX(180deg)';
    //             barra.style.transform = mostrar;
    //             listaBarra.style.transform = mostrar;
    //             cabecera.classList.remove(claseRedondearBordes);
    //         }
    //     });
    // }

    function mostrarOcultarBarra() {
        var checkbox = document.getElementById('btn-barra');
        var icono = document.getElementById('icono-flecha');
        var cabecera = document.getElementById('cabecera')
        var barra = document.getElementById('barra');
        var listaBarra = document.getElementById('lista-barra');

        var esconder = 'translateY(-200%)';
        var mostrar = 'translateY(0%)';
        var claseRedondearBordes = 'redondear-bordes-abajo'


        var header = document.querySelector('header');
        var separadores = document.querySelectorAll('.separador');
        var altura;

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                cabecera.classList.add(claseRedondearBordes);
                icono.style.transform = 'rotateX(360deg)';

                barra.style.transform = esconder;
                listaBarra.style.transform = esconder;

                altura = header.offsetHeight;
                
            } else {
                icono.style.transform = 'rotateX(180deg)';
                barra.style.transform = mostrar;
                listaBarra.style.transform = mostrar;
                cabecera.classList.remove(claseRedondearBordes);

                altura = header.offsetHeight+barra.offsetHeight;
            }

            console.log(altura);
            separadores.forEach(function(separador) {
                separador.style.marginBottom = altura + 'px';
            });
        });
    }


/*
    function mostrarOcultarBarra() {
        var checkbox = document.getElementById('btn-barra');
        var icono = document.getElementById('icono-flecha');
        var cabecera = document.getElementById('cabecera')
        var barra = document.getElementById('barra');
        var listaBarra = document.getElementById('lista-barra');

        var cabecera = document.querySelector('header');
        var separadores = document.querySelectorAll('.separador');

        var esconder = 'translateY(-200%)';
        var mostrar = 'translateY(0%)';
        var altura = '10';

        checkbox.addEventListener('change', function() {
            
            if (checkbox.checked) {
                cabecera.classList.add(claseRedondearBordes);
                icono.style.transform = 'rotateX(360deg)';

                barra.style.transform = esconder;
                listaBarra.style.transform = esconder;

                
                // altura = '10';
            } else {
                icono.style.transform = 'rotateX(180deg)';
                barra.style.transform = mostrar;
                listaBarra.style.transform = mostrar;
                cabecera.classList.remove(claseRedondearBordes);

                // altura = cabecera.offsetHeight;
            }
            
        });

        // separadores.forEach(function(separador) {
        //     separador.style.marginBottom = altura + 'px';
        // });

        
    }
    */


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
            let colorPrincipal1, colorPrincipal2, colorFondo, colorblanco, colorGris1, colorGris2, colorSeccion;
            if (modoOscuroCheckbox.checked) {
                colorPrincipal1 = computedStyles.getPropertyValue('--color-principal1-dark');
                colorPrincipal2 = computedStyles.getPropertyValue('--color-principal2-dark');
                colorFondo = computedStyles.getPropertyValue('--color-fondo-dark');
                colorblanco = computedStyles.getPropertyValue('--color-blanco-dark');
                colorGris1 = computedStyles.getPropertyValue('--color-gris1-dark');
                colorGris2 = computedStyles.getPropertyValue('--color-gris2-dark');
                colorSeccion = computedStyles.getPropertyValue('--color-seccion-dark');
                colorLetra = computedStyles.getPropertyValue('--color-letra-dark');
            } else {
                colorPrincipal1 = computedStyles.getPropertyValue('--color-principal1-light');
                colorPrincipal2 = computedStyles.getPropertyValue('--color-principal2-light');
                colorFondo = computedStyles.getPropertyValue('--color-fondo-light');
                colorblanco = computedStyles.getPropertyValue('--color-blanco-light');
                colorGris1 = computedStyles.getPropertyValue('--color-gris1-light');
                colorGris2 = computedStyles.getPropertyValue('--color-gris2-light');
                colorSeccion = computedStyles.getPropertyValue('--color-seccion-light');
                colorLetra = computedStyles.getPropertyValue('--color-letra-light');
            }
            
            /* Asignacion a root */
            document.documentElement.style.setProperty('--color-principal1', colorPrincipal1);
            document.documentElement.style.setProperty('--color-principal2', colorPrincipal2);
            document.documentElement.style.setProperty('--color-fondo', colorFondo);
            document.documentElement.style.setProperty('--color-blanco', colorblanco);
            document.documentElement.style.setProperty('--color-gris1', colorGris1);
            document.documentElement.style.setProperty('--color-gris2', colorGris2);
            document.documentElement.style.setProperty('--color-seccion', colorSeccion);
            document.documentElement.style.setProperty('--color-letra', colorLetra);
        });
    }