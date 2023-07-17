
const url = 'http://localhost:4000/clientes';

// CREACION CLIENTE
export const agregarCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json'
            }
        })

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}

// OBTENER CLIENTES
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error)
    }
}

// ELIMINAR CLIENTE
export const eliminarCliente = async clienteID => {
    try {
        await fetch(`${url}/${clienteID}`, {
            method: 'DELETE'

        })
    } catch (error) {
        
    }
}