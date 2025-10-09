const inputs = document.querySelectorAll('input')
const spans = document.querySelectorAll('span')
const mensagem = document.getElementById('messageSendId')

function mostrarMensagem() {
    mensagem.style.display ='block'
    setTimeout(() => {
        mensagem.style.display ='none'
    }, 3000);
}

function validar() {
    let valido = true
    inputs.forEach((v, index) =>{
        
        if (v.value ==='') {
            spans[index].classList.add('erroSpan')
            v.classList.add('erroInput')
            valido = false
        }else{
            spans[index].classList.remove('erroSpan')
            v.classList.remove('erroInput')
        }

    })

    if (valido) {
        console.log('validado')
        mostrarMensagem()
    }
}