const textos = [
    'En un lugar de la Mancha de cuyo nombre no quiero acordarme',
    'vivía un gran manantial',
    'En un lugar de la Mancha de cuyo nombre no quiero acordarme',
];

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');

    cargarTabla();

    const h1 = document.querySelector('h1');

    console.log(h1);

    h1.innerHTML = 'Hola mundo';

    const bloque = document.querySelector('#parrafos');
    const parrafos = document.querySelectorAll('#parrafos p');

    for (p of parrafos) {
        bloque.removeChild(p);
    }

    for (const texto of textos) {
        const p = document.createElement('p');
        p.innerHTML = texto;
        bloque.appendChild(p);
    }

    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;

        alert('Has enviado el formulario' + nombre + ' ' + apellidos);
    });
});

async function cargarTabla() {
    console.log('Cargando tabla');

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    const respuesta = await fetch('json/productos.json');
    const productos = await respuesta.json();

    for (const producto of productos) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        `;

        tbody.appendChild(tr);
    }
}