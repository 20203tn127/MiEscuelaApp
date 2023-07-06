
async function obtenerDocentes(){
    const response = await fetch('../data/docentes.json')
    return await response.json();
}

obtenerDocentes().then((docentes) => {
    const tbody = document.getElementById('tbody');

    docentes.forEach(docente => {
        
        let tr = document.createElement('tr');
        //Nombre
        let name = document.createElement('td');
        name.textContent = docente.nombre;
        
        //Grados academicos
        let grados = document.createElement('td');
        let listaGrados = document.createElement('ul');

        docente.grados_academicos.forEach(grado => {
            let li = document.createElement('li');
            li.innerText = grado.titulo;

            listaGrados.appendChild(li);
        })

        //Apellido materno
        let apellidoMaterno = document.createElement('td');
        apellidoMaterno.textContent = docente.apellido_materno;

        //Apellido paterno
        let apellidoPaterno = document.createElement('td');
        apellidoPaterno.textContent = docente.apellido_paterno;

        //Fecha nacimiento
        let fecha = document.createElement('td');
        fecha.textContent = docente.fecha_nacimiento;

        //Correo
        let correo = document.createElement('td');
        correo.textContent = docente.correo_electronico;

        //Division
        let division = document.createElement('td');
        division.textContent = docente.division_academica.nombre;

        //Tipo plaza
        let plaza = document.createElement('td');
        plaza.textContent = docente.tipo_plaza_docente;  

        tr.appendChild(name);
        tr.appendChild(apellidoPaterno);
        tr.appendChild(apellidoMaterno);
        tr.appendChild(fecha);
        tr.appendChild(correo);
        tr.appendChild(division);
        tr.appendChild(plaza);
        tr.appendChild(grados.appendChild(listaGrados));
        tbody.appendChild(tr);
    });
    
})