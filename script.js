let num = document.getElementById('fnum')
let btnAdc = document.getElementById('btn1')

btnAdc.addEventListener('click', () => {
    if (num.value == "" ) {
        alert('Insira um numero')
        return
    } if (num.value < 1 || num.value > 100) {
        alert('Adicione um número válido')
    }    
})