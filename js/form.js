let adicionarPaciente = document.querySelector('#adicionar-paciente')

adicionarPaciente.addEventListener('click', event => {
    event.preventDefault()

    let form = document.querySelector('#form-adiciona')
    let paciente = obtemPacienteDoform(form)
    let pacienteTr = createTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    let erros = validaPaciente(paciente)
    let messagesErro = document.querySelector('#messages-error')

    if (erros.length > 0) {
        exibeMessagensDeErro(erros)

        return
    }

    tabela.appendChild(pacienteTr)

    form.reset()
    messagesErro.innerHTML = ''
})

function exibeMessagensDeErro(erros) {
    let ul = document.querySelector('#messages-error')

    ul.innerHTML = ''

    erros.forEach(erro => {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

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
    pacienteTr.appendChild(createTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(createTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(createTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function createTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {
    let erros = []

    if (paciente.nome === '') erros.push('O campo nome está vázio')
    if (paciente.peso === '') erros.push('O campo peso está vázio')
    if (paciente.altura === '') erros.push('O campo altura está vázio')
    if (paciente.gordura === '') erros.push('O campo gordura está vázio')

    if (!validaPeso(paciente.peso)) erros.push('Peso é inválido')

    if (!validaAltura(paciente.altura)) erros.push('Altura é inválido')

    return erros
}
