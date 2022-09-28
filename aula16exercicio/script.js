let num = document.getElementById('num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar() {
    res.innerHTML = ""
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let list = document.createElement('option')
        list.text = `O número ${num.value} foi adicionado`
        lista.appendChild(list)
        valores.push(Number(num.value))



    } else {
        alert('[ERRO] Número inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}



function finalizar() {
    if (Number(valores.length) == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {

    
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
        if (valores[pos] > maior) 
            maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]

        }
        media = soma / valores.length

        res.innerHTML = `Os valores informados foram (${valores}).<br><br>`
        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados.<br><br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br><br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br><br>`
        res.innerHTML += `Somando todos os valores temos ${soma}.<br><br>`
        res.innerHTML += `A média dos valores digitados é ${media}.`
    }
}