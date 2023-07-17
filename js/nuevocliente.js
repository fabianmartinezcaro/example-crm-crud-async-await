import { agregarCliente } from "./API.js";
import UI from "./UI.js";

(function(){

    const ui = new UI();

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarFormulario);

    function validarFormulario(evento){
        evento.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validarDatos(cliente)){
            ui.mostrarAlerta('Todos los datos son obligatorios', 'error');
            return;
        }

        ui.mostrarAlerta('Cliente agregado correctamente!', 'correcto');
        agregarCliente(cliente);
        ui.agregarRegistro();

    }


    function validarDatos(cliente){
        return !Object.values(cliente).every(input => input !== '');
    }
    
})();