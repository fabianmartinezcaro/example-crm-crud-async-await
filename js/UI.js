export class UI{

    mostrarAlerta(mensaje, tipo){

        const alerta = document.querySelector('.bg-red-100');
        let condicionCumplida = false;

        if(!alerta){
            alerta.textContent = mensaje;

            alerta.classList.add('bg-red-100', 'border-red-400', 'text-center', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto');

            alerta.innerHTML = `
                <strong class="font-bold">error</strong>
                <span class="block sm:inline">${mensaje}</span>
            `
            
        }



    }

}