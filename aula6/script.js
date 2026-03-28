const botao = document.querySelector("button")

function moverBotao(){
    x = Math.random() * (window.innerWidth - 100)
    y = Math.random() * (window.innerHeight - 100)
    botao.style.left = `${x}px`
    botao.style.top = `${y}px`
}

botao.addEventListener("mouseover", moverBotao)
