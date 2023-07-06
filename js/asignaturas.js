async function fetchAsignaturas(){
    let response = await fetch('../data/asignaturas.json');
    return await response.json();
}

fetchAsignaturas().then(data => {
    Object.entries(data).forEach(([key, value]) => {
        const tabla = document.getElementById('tbod');
        tabla.innerHTML += `
        <tbody>
              <tr>
                <td>${value.id}</td>
                <td>${value.nombre}</td>
                <td>${value.codigo}</td>
                <td>${value.creditos}</td>
                <td>${value.seriacion ? value.seriacion : 'N/A'}</td>
                <td>${value.cuatrimestre}</td>
                <td>${value.carrera.nombre}</td>
              </tr>
        </tbody>` 
    })
});