const socket = io()
//expone a la libreria io para poder conectarse al servidor

const caja = document.getElementById('caja')
const contenido = document.getElementById('contenido')

caja.addEventListener('change', (e) => {
    //vada vez que excribamos algo en el input y presionemos enter se va a gatillar un mensaje en el servidor enviando u objeto que diga user, que pondria nuestro nombre, y mensaje mostrando el valor
    socket.emit('mensaje', {
        user: usuario,
        mensaje: e.target.value,
    })
})

let usuario = ''

//importamos sweetarlet 
Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off'
    },
    confirmButtonText: 'Ingresar',
    showLoaderOnConfirm: true,
    }).then((result) => {
        usuario = result.value
})

//escucharemos al resto de los usuarios
//recibimos la data y la renderizamos en el index.html, pero la data de mensajes será una lista
//[ {user: 'usuario', mensaje: 'mensaje'} ]
socket.on('nuevo_mensaje', (data) => {
    const mensajes = data.map(({user, mensaje}) => {
        return `<p>${user} dijo: ${mensaje}</p>`
    })

    //con join va a tomar mi lista y generará un único string de tal forma : <p>${user} dijo: ${mensaje}</p>
    contenido.innerHTML = mensajes.join('')
})