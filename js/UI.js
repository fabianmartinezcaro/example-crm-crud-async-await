export default class UI{

    agregarRegistro(){
        
    }

    mostrarAlerta(mensaje, tipo){

        const formulario = document.querySelector('#formulario');
        const alerta = document.createElement('DIV');
        alerta.textContent = mensaje;

        if(tipo === 'error'){
            alerta.classList.add('bg-red-100', 'border', 'border-red-500', 'my-4', 'py-4', 'px-2', 'text-center');
        }else if(tipo === 'correcto'){
            alerta.classList.add('bg-green-100', 'border', 'border-green-500', 'my-4', 'py-4', 'px-2', 'text-center');
        }

        formulario.appendChild(alerta); 

        setTimeout(() => {
            alerta.remove();
        }, 2000);

    }

}