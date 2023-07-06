const url = 'data/nomina.json';
(usePromise = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
})(url)
    .then(data => {

        const tableBody = document.getElementById('info-nomina');
        console.log(data);

        for (const [key, value] of Object.entries(data)) {
            console.log(value.nombre);
            tableBody.innerHTML += `
            <tr>
                <th scope="row">${value.id}</th>
                <td>${value.fecha_pago}</td>
                <td>${value.profesor.nombre}</td>
                <td>${value.dias_trabajados}</td>
                <td>${value.salario}</td>
                <td>${value.retenciones}</td>
                <td>${value.vales_despensa}</td>
            </tr>
            `;
        }


    })
    .catch(err => console.log(err))