const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

const uf = document.getElementById("uf")

const city = document.getElementById("city")

window.addEventListener('load', async () => {

    const request = await fetch(urlUF)
    const response = await request.json()

    const options = document.createElement("optgroup")
    options.setAttribute('label', 'Estados')

    response.forEach(function (uf) {
        options.innerHTML += '<option>' + uf.sigla + '</option>'
    })

    uf.append(options)
})

uf.addEventListener('change', async function () {

    const urlCity = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ uf[uf.selectedIndex].value + '/municipios'

    const request = await fetch(urlCity)
    const response = await request.json()

    if (uf.options[uf.selectedIndex].value != '0' ) {
        city.removeAttribute('disabled')

        const options = document.createElement("optgroup")
        options.setAttribute('label', 'Cidades')

        response.forEach(function (city) {
        options.innerHTML += '<option>' + city.nome + '</option>'
        })

        city.append(options)
    } else {
        city.setAttribute('disabled', '0')
    }  

})

// ÁREA SELECIONADA
function area_selected() {
    var select = document.getElementById('advAreas');
    var option = select.options[select.selectedIndex].text;

    if (option != '0') {
        document.getElementById('area-selected').value = option;
    } else {
        document.getElementById('area-selected').value = '';
    }

}

area_selected();