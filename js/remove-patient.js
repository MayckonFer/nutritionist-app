let removePaciente = document.querySelectorAll('.paciente')

let removeTabela = document.querySelector('table')

removeTabela.addEventListener('dblclick', event => {
    event.target.parentNode.remove()
})
