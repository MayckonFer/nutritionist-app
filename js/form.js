let adicionarPaciente = document.querySelector('#adicionar-paciente')

adicionarPaciente.addEventListener('click', event => {
    event.preventDefault()

    // Extraindo informações do paciente do form
    let form = document.querySelector('#form-adiciona')
    let paciente = obtemPacienteDoform(form)

    // Cria a tr a td do paciente
    let pacienteTr = createTr(paciente)

    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    form.reset()
})

function obtemPacienteDoform(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function createTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(createTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(createTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(createTd(paciente.peso, 'info-altura'))
    pacienteTr.appendChild(createTd(paciente.peso, 'info-gordura'))
    pacienteTr.appendChild(createTd(paciente.peso, 'info-imc'))

    return pacienteTr
}

function createTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}
