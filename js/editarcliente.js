import { editarCliente, obtenerCliente } from "./API.js";
import UI from "./UI.js";

(function(){

    const ui = new UI();

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        // SUBMIT AL FORMULARIO EDITADO
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente)
    })

    function mostrarCliente(cliente){

        const {nombre, email, telefono, empresa, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }

    function validarCliente(evento){
        evento.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if(validarDatos(cliente)){
            ui.mostrarAlerta('Todos los datos son obligatorios', 'error');
            return;
        }

        editarCliente(cliente);

    }

    function validarDatos(cliente){
        return !Object.values(cliente).every(input => input !== '');
    }

})();