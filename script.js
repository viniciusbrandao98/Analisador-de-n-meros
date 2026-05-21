let num = document.getElementById('fnum')
let btnAdc = document.getElementById('btn1')
let lista = document.getElementById('flista')
let valores = []

btnAdc.addEventListener('click', () => {
    if (Number(num.value) == "" ) {
        alert('Insira um numero')
        num.value = ""
        return
    } if (Number(num.value) < 1 || Number(num.value > 100)) {
        alert('Adicione um número válido')
        num.value = ""
        return
    } if (Number(num.value) >= 1 && Number(num.value <= 100)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        num.value = ""
    }   
})