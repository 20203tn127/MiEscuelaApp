async function grupos() {
    const response = await fetch('../data/grupos.json');
    if (!response.ok) { // Respuesta con estatus no exitoso
          throw new Error(`HTTP error! status: ${response.status}`);
      }
    return await response.json(); // Retornar la respuesta
  }
  
  grupos().then(data => { 
    let tabla = document.getElementById("tableGrupos")

    
    for (let i = 0; i < data.length; i++) {
        tabla.innerHTML += `
        <tr class="text-center">
            <td>${data[i].id}</td>
            <td>${data[i].cuatrimestre}</td>
            <td>${data[i].grupo} </td>
            <td>${data[i].generacion}</td>
            <td>${data[i].carrera.nombre}</td>
            <td>${data[i].jefe_grupo.nombre}</td>
            <td>${data[i].profesor_tutor.nombre}</td>
        </tr>
            `
    }
  });