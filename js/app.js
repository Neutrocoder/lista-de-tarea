document.addEventListener('DOMContentLoaded', () => {
    //declaracion de variables con los elementos del DOM
    const textoTarea = document.getElementById('inputDeTarea');
    const botonAgregar = document.getElementById('agregarTarea');
    const listaDeTareas = document.querySelector('.listaDeTarea');

    //Agregar evento click al boton
    botonAgregar.addEventListener('click', () => {

        const tareaTexto = textoTarea.value.trim();

        if (tareaTexto.length > 0) {
            const tareaDiv = document.createElement('div');
            tareaDiv.classList.add('tarea');
            tareaDiv.textContent = tareaTexto;

            const eliminarTarea = document.createElement('button')
            eliminarTarea.textContent = 'eliminar';
            eliminarTarea.classList.add('boton-eliminar'); 

            // agregar el evento al boton de eliminar

            eliminarTarea.addEventListener('click', () => {
                tareaDiv.remove();
            });

             // Añadir el botón de eliminar al div de la tarea
            tareaDiv.appendChild(eliminarTarea);

            // Añadir la nueva tarea al contenedor de tareas
            listaDeTareas.appendChild(tareaDiv);
            
            //limpiar area de texto
            textoTarea.value = '';


        }
        else {
            alert('Por favor, ingresa una tarea.');
        }
    });



});