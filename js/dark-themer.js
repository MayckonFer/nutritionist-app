const buttonDarkThemer = document.querySelector('#dark-themer')

buttonDarkThemer.addEventListener('click', () => {
    const title = document.querySelectorAll('.title')
    const titleButton = document.querySelector('.header-wrapper label')
    const titleInput = document.querySelectorAll('.title-input')
    const headerBackground = document.querySelector('header')
    const wrapperTable = document.querySelectorAll('.wrapper-table')
    const list = document.querySelectorAll('tr, th')
    const inputs = document.querySelectorAll('.campo')
    const button = document.querySelector('#adicionar-paciente')

    headerBackground.classList.toggle('dark-background')
    titleButton.classList.toggle('dark-button-title')
    button.classList.toggle('dark-button')

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle('dark-input')
    }

    for (let i = 0; i < titleInput.length; i++) {
        titleInput[i].classList.toggle('dark-grupo-title-input')
    }

    for (let i = 0; i < title.length; i++) {
        title[i].classList.toggle('dark-title')
    }

    for (let i = 0; i < wrapperTable.length; i++) {
        wrapperTable[i].classList.toggle('dark-background')
    }

    for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle('dark-td-th')
    }

    // Validação no Themer Dark

    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i]

        let tdPeso = paciente.querySelector('.info-peso')
        let peso = tdPeso.textContent

        let tdAltura = paciente.querySelector('.info-altura')
        let altura = tdAltura.textContent

        let tdImc = paciente.querySelector('.info-imc')

        let pesoEhValido = validaPeso(peso)
        let alturaEhValida = validaAltura(altura)

        if (!pesoEhValido) {
            pesoEhValido = false
            tdImc.textContent = 'Peso inválido'
            paciente.classList.add('dark-td-th-invalid')
        }

        if (!alturaEhValida) {
            alturaEhValida = false
            tdImc.textContent = 'Altura inválida'
            paciente.classList.add('dark-td-th-invalid')
        }

        if (alturaEhValida && pesoEhValido) {
            let imc = calculaImc(peso, altura)
            tdImc.textContent = imc
        }
    }

    function validaPeso(peso) {
        if (peso >= 0 && peso < 1000) {
            return true
        } else {
            return false
        }
    }

    function validaAltura(altura) {
        if (altura >= 0 && altura <= 3.0) {
            return true
        } else {
            return false
        }
    }

    createTr(paciente)
})

function createTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('dark-td-th')

    pacienteTr.appendChild(createTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(createTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(createTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(createTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(createTd(paciente.imc, 'info-imc'))

    return pacienteTr
}
