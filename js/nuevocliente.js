(function(){
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
            console.log('Los datos son obligatorios');
            return;
        }

        console.log('Cliente agregado exitosamente!');

    }

    function validarDatos(cliente){
        return !Object.values(cliente).every(input => input !== '')
    }
    
})();