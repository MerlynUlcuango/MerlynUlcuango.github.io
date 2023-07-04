const formulario = document.getElementById('formulario'); //Obtiene el documento con el ID
const registro = document.getElementById('registro'); //Obtiene el documento con el ID para mensaje de registro
const exito = document.getElementById('exito');//Nos ayuda a crear una pagina de registo exitoso de los datos

formulario.addEventListener('submit', async(e) => { e.preventDefault();//Agrega un evento de escucha al formulario cuando se envía 
await fetch('https://sheet.best/api/sheets/9ef41c76-5cbe-44b8-a1e8-33c86efa6768', { //Accedemos al link de drive con el que se accede
    method: 'POST',//Método que nos va ayudar a enviar los datos
    mode: 'cors',//especifica que la solicitud se realiza utilizando una política de origen cruzado.
    headers: {  // establece las cabeceras de la solicitud.
    'Content-Type': 'application/json' //indica que los datos se enviarán en formato JSON.
    },
    body: JSON.stringify({ //convierte un objeto JavaScript en una cadena JSON
        "nombredominio": formulario.nombredominio.value,
        "direccionip":formulario.direccionip.value,
        "direccionurl":formulario.direccionurl.value,
        "nombreadmin":formulario.nombreadmin.value,
        "paisadmin":formulario.paisadmin.value,
        "telefonoadmin":formulario.telefonoadmin.value,
        "correoadmin":formulario.correoadmin.value,
        "nombretec":formulario.nombretec.value,
        "paistec":formulario.paistec.value,
        "telefonotec":formulario.telefonotec.value,
        "correotec":formulario.correotec.value,
        "server1":formulario.server1.value,
        "server2":formulario.server2.value,
        "tipoa":formulario.tipoa.value,
        "tipomx":formulario.tipomx.value,
        "tipoptr":formulario.tipoptr.value,
        "tipospf":formulario.tipospf.value,
        "tipocname":formulario.tipocname.value,

    })
    });

    alert('El registro se ha completado exitosamente.');
    formulario.reset();
    registro.classList.remove('activo');//Elimina la clase CSS 'activo' del elemento con el ID "registro".
    exito.classList.add('activo');//grega la clase CSS 'activo' al elemento con el ID "exito".
});