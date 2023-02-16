const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

const uf = document.getElementById("uf")

const city = document.getElementById("city")

window.addEventListener('load', async function () {

    const request = await fetch(urlUF)
    const response = await request.json()

    const options = document.createElement("optgroup")
    options.setAttribute('label', 'Estados')
    options.setAttribute('style', 'height: 80px !important;')

    response.forEach(function (uf) {
        options.innerHTML += '<option value="' + uf.id + '"' + '>' + uf.sigla + '</option>'
    })

    uf.append(options)
})

uf.addEventListener('change', async function () {
    const optgroup = document.getElementById("optgroup")
    const existOptgroup = document.body.contains(optgroup)

    if (existOptgroup == false) {
        if (uf.options[uf.selectedIndex].value != 0) {

            city.removeAttribute('disabled')

            const ufSelected = uf.options[uf.selectedIndex].value

            const urlCity = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + ufSelected + '/municipios'

            const request = await fetch(urlCity)
            const response = await request.json()

            const options = document.createElement("optgroup")
            options.setAttribute('label', 'Cidades')
            options.setAttribute('id', 'optgroup')

            response.forEach(function (city) {
                options.innerHTML += '<option>' + city.nome + '</option>'
            })

            city.append(options)
        }
    } else {
        console.log(existOptgroup)
        var remove_optgroup = document.querySelector("#optgroup")
        remove_optgroup.parentNode.removeChild(remove_optgroup)

        const ufSelected = uf.options[uf.selectedIndex].value

        const urlCity = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + ufSelected + '/municipios'

        const request = await fetch(urlCity)
        const response = await request.json()

        const options = document.createElement("optgroup")
        options.setAttribute('label', 'Cidades')
        options.setAttribute('id', 'optgroup')

        response.forEach(function (city) {
            options.innerHTML += '<option>' + city.nome + '</option>'
        })

        city.append(options)
    }
})

// ÁREA SELECIONADA
// function area_selected() {
//     var select = document.getElementById('advAreas');
//     var option = select.options[select.selectedIndex].text;

//     if (option != '0') {
//         document.getElementById('area-selected').value = option;
//     } else {
//         document.getElementById('area-selected').value = '';
//     }

// }

// area_selected();

// CONFERINDO INEXISTÊNCIA DE ELEMENTO PARA MOSTRAR OUTRO
// const adv_nine = document.getElementById("adv-nine")
// const adv_nine_2 = document.getElementById("adv-nine-2")
// const g_content = document.getElementById("g-content")
// const exists = document.head.contains(g_content)

// console.log(exists)

// function active() {
//     if (exists == false) {
//         adv_nine.removeAttribute('style')
//         adv_nine_2.removeAttribute('style')
//     }
// }

// active();