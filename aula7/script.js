//event.preventDefault()

const page = document.body
const button = document.getElementById("button")
const inputTitulo = document.getElementById("title")
const inputContext = document.getElementById("context")
const notes = document.getElementById("notes")
const nota = {
    title: inputTitulo.value,
    context: inputContext.value,
    data: new Date().toLocaleDateString('pt-BR'),
}

button.addEventListener("click", function(event) {
    event.preventDefault()
    const cardNota = document.createElement("div")
    const textoNota = document.createElement("p")
    textoNota.textContent = nota.context
    inputContext.value = ""
    const titleNota = document.createElement("h3")
    titleNota.textContent = nota.title
    inputTitulo.value = ""
    const dataNota = document.createElement("p")
    dataNota.value = nota.data

    cardNota.appendChild(titleNota)
    cardNota.appendChild(textoNota)
    cardNota.appendChild(dataNota)
    cardNota.style.backgroundColor = "#ffeb3b"
    notes.appendChild(cardNota)
    
    

})