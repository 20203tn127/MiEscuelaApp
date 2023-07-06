async function fetchEstudiantes() {
    const response = await fetch('../data/estudiantes.json', {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  fetchEstudiantes().then(data => {
    const table = document.getElementById("tbody");
    data.forEach((alumno) => {
        let tr =document.createElement('tr')
        let id = document.createElement('td');
        id.textContent = alumno.id;
        let name = document.createElement('td');
        name.textContent = alumno.nombre;

      

        let apellido_paterno = document.createElement('td');
        apellido_paterno.textContent = alumno.apellido_paterno;

        let apellido_materno = document.createElement('td');
        apellido_materno.textContent = alumno.apellido_materno;

        let fecha_nacimiento = document.createElement('td');
        fecha_nacimiento.textContent = alumno.fecha_nacimiento;

        let correo_electronico = document.createElement('td');
        correo_electronico.textContent = alumno.correo_electronico;

        let telefono = document.createElement('td');
        telefono.textContent = alumno.telefono;

        let direccion = document.createElement('td');
        direccion.textContent = alumno.direccion;
        
        let carrera = document.createElement('td');
        carrera .textContent = alumno.carrera.nombre;
       
       
     tr.appendChild(id)
     tr.appendChild(name)
     tr.appendChild(apellido_paterno)
     tr.appendChild(apellido_materno)
     tr.appendChild(fecha_nacimiento)
     tr.appendChild(correo_electronico)
     tr.appendChild(telefono)
     tr.appendChild(direccion)
     tr.appendChild(carrera)

          
     table.appendChild(tr)
    });
  
    
  });