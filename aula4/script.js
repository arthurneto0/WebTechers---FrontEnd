/*let src = "img.jpg"
let text = "descrição"
let titulo = "Texto"

const infoCard = document.getElementById("info1")
const tituloCard = document.getElementById("titulo1")
const imgCard = document.getElementById("img1")

imgCard.setAttribute("src", src)
infoCard.textContent = text
tituloCard.textContent = titulo*/

const dataInfo = ["Primeiro filósofo; acreditava que a água era a origem de todas as coisas.", "Defendia que o ar, através da rarefação, era o princípio de tudo o que existe.", "Criou o conceito de Ápeiron, o infinito indeterminado que gera o universo.","Propôs que sementes de tudo são ordenadas por uma Inteligência Suprema.", "Matemático que via nos números a harmonia e a estrutura fundamental do cosmos.", "Pai da dialética; afirmava que a única constante do mundo é a própria mudança.", "Defendia que a mudança é ilusão e que o Ser é eterno, único e imutável.", "Focou na ética e no autoconhecimento através do diálogo e da ironia constante.", "Criou a Teoria das Formas, separando o mundo sensível do mundo perfeito das ideias.", "Sistematizou o saber através da lógica, biologia e da observação da realidade."]

const imgData = ["images/talesdemileto.jfif", "images/anaximenes.jpg", "images/anaximandro.jfif", "images/anaxagoras.webp", "images/pitagoras.jfif", "images/heraclitp.webp", "images/parmenides.jfif", "images/socrates.jfif", "images/platao.webp", "images/aristoteles.jfif"]

const headings = ["Tales de Mileto", "Anaxímenes", "Anaximandro", "Anaxágoras", "Pitágoras", "Heráclito", "Parmênides", "Sócrates", "Platão", "Aristóteles"]

const imgCard = document.getElementsByClassName("img-card")
const titulo = document.getElementsByClassName("titulo")
const info = document.getElementsByClassName("info")

for (let i=0; i<10; i++){
    imgCard[i].setAttribute("src", imgData[i])
    titulo[i].textContent = headings[i]
    info[i].textContent = dataInfo[i]
}