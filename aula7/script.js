//event.preventDefault()

const page = document.body
const button = document.getElementById("button")
const inputTitulo = document.getElementById("title")
const inputContext = document.getElementById("context")
const notes = document.getElementById("notes")
const card = document.getElementById('card')


button.addEventListener("click", function (event) {

    event.preventDefault()
    const nota = {
        title: inputTitulo.value,
        context: inputContext.value,
        data: new Date().toLocaleDateString('pt-BR'),
    }
    if (nota.title != '' && nota.context != '') {
        const cardNota = document.createElement("div")
        const infoNota = document.createElement("div")
        cardNota.classList.add('card')
        const textoNota = document.createElement("p")
        textoNota.textContent = nota.context
        inputContext.value = ""
        const titleNota = document.createElement("h3")
        titleNota.textContent = nota.title
        titleNota.classList.add("tituloNota")
        inputTitulo.value = ""
        const dataNota = document.createElement("p")
        dataNota.textContent = nota.data
        const btnExcluir = document.createElement("button")

        btnExcluir.style.backgroundColor = "#ff3b3b";
        btnExcluir.style.borderRadius = "50%"
        btnExcluir.style.height = "20px"
        btnExcluir.classList.add("btnExcluir")
        btnExcluir.style.opacity = '0'
        btnExcluir.textContent = "X"

        infoNota.appendChild(titleNota)
        infoNota.appendChild(textoNota)
        infoNota.appendChild(dataNota)
        cardNota.appendChild(infoNota)
        cardNota.appendChild(btnExcluir)
        cardNota.style.backgroundColor = "#fff384"
        notes.appendChild(cardNota)

        cardNota.addEventListener('mouseover', () => {
            btnExcluir.style.opacity = '1'
        })

        cardNota.addEventListener('mouseout', () => {
            btnExcluir.style.opacity = '0'
        })

        btnExcluir.addEventListener("click", () => {
            cardNota.remove()
        })
    }
})





