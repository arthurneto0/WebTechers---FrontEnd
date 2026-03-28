const botao = document.querySelector("button")

botao.onclick = function(){
    console.log("Botão clicado")
}

botao.addEventListener('click', () => {
    console.log("Clicou")
})

botao.addEventListener("click", () => {
    
})

function ola() {
    console.log("Olá mundo!")
}

//tipos de função

//funcão de declaração
function sum(a, b){
    return a + b
}

//função de expressão
const multiplicar = (a, b) => {
    return a * b
}

//arrow - flecha

//const dobrar = (a) => a*2