const linhas = document.getElementsByClassName("linha-filme")
console.log(linhas)

console.log(linhas[1])

console.log(linhas[0].children)



const baseDeDados = [
    {
        titulo: "Inception",
        ano: "2011",
        status: "Assistido",
        nota: "9.5"
    },
    {
        titulo: "Interestelar",
        ano: "2009",
        status: "Assistido",
        nota: "9.2"
    },
    {
        titulo: "Homem Aranha",
        ano: "2002",
        status: "Assistido",
        nota: "8.4"
    },
]

for (let l=0; linhas.length; l++){
    const celulas = linhas[l].children
    celulas[0].textContent = baseDeDados[l].titulo
    celulas[1].textContent = baseDeDados[l].ano
    celulas[2].textContent = baseDeDados[l].status
    celulas[3].textContent = baseDeDados[l].nota
}