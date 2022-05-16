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

    // Adicionar table no dark themer

    createTr(pacientes)
})

function createTr(paciente) {
    let pacienteTr = document.createElement('tr')

    if (buttonDarkThemer.checked === false) {
        pacienteTr.classList.add('paciente')
    } else {
        pacienteTr.classList.add('dark-td-th')
    }

    pacienteTr.appendChild(createTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(createTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(createTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(createTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(createTd(paciente.imc, 'info-imc'))

    return pacienteTr
}
