let num = document.getElementById('fnum')
let btnAdc = document.getElementById('btn1')
let btnFinal = document.getElementById('btn2')
let lista = document.getElementById('flista')
let res = document.querySelector('.res')
let valores = []

btnAdc.addEventListener('click', () => {
    if (Number(num.value) == "") {
        alert('Insira um numero')
        num.value = ""
        num.focus()
        return
    } if (Number(num.value) < 1 || Number(num.value) > 100) {
        alert('Adicione um número válido')
        num.value = ""
        num.focus()
        return
    } if (Number(num.value) >= 1 && Number(num.value) <= 100) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        num.value = ""
        num.focus()
    }
})

btnFinal.addEventListener('click', () => {
    if (valores.length == '') {
        alert('Insira o valor antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let index = 0; index < valores.length; index++) {
            if (valores[index] > maior) {
                maior = valores[index]
            } if (valores[index] < menor) {
                menor = valores[index]
            }
            soma = soma + valores[index]
        }
        media = soma/tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O  menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.`
        res.innerHTML += `<p>A media de todos os valores é ${media}.`
    }
})