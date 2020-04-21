let banco = []
let lista = window.document.querySelector('select#inseridos')
let res = window.document.querySelector('div#resultado')
let num = window.document.querySelector('input#num')
function verificar() {
    if (num.value < 101 && num.value > 0 && banco.indexOf(num.value) == -1) {
        banco.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${banco[(banco.length - 1)]} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}
function finalizar() {
    function comparation(a, b){ // define padrão de avaliação do metodo sort
        return (a - b)
    }
    if (banco.length == 0) {
        window.alert('Insira um valor antes de finalizar!')
    } else {
        res.innerHTML = `<p>Ao todo, temos ${banco.length} números cadastrados.</p>`
        banco.sort(comparation)
        res.innerHTML += `<p>O maior valor informado foi ${banco[(banco.length - 1)]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${banco[0]}.</p>`
        let soma = 0
        for (let pos in banco) {
            soma += Number(banco[pos])
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / banco.length}.</p>`
    }
}
