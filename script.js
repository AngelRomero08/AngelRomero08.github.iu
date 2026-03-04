function filtrar(categoria, elemento) {
    // 1. Quitar la clase "activo" de todos los textos y ponérsela al que clickeaste
    const enlaces = document.querySelectorAll('.filtro-link');
    enlaces.forEach(link => link.classList.remove('activo'));
    elemento.classList.add('activo');

    // 2. Lógica para animar y filtrar las fotos
    const fotos = document.querySelectorAll('.foto-container');
    
    fotos.forEach(foto => {
        // Primero las desvanecemos
        foto.classList.add('fade-out');
        
        // Esperamos a que termine el desvanecimiento para ocultarlas/mostrarlas
        setTimeout(() => {
            if (categoria === 'todas' || foto.classList.contains(categoria)) {
                foto.classList.remove('oculto');
                // Un pequeñito retraso para que el fade-in funcione bien
                setTimeout(() => foto.classList.remove('fade-out'), 50);
            } else {
                foto.classList.add('oculto');
            }
        }, 400); // 400ms es el tiempo que tarda la animación en CSS
    });
}