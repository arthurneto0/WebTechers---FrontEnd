// class sla extends HTMLElement{
//     constructor(){
//         super()
//     }
// }

// class Pessoa {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const aluno = new Pessoa("Arthur", 16)

class Popupinfo extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback(){
        // Criando elementos internos da tag
        const wrapper = document.createElement('span')
        wrapper.setAttribute('class', 'wrapper')

        const icon = document.createElement('span')
        icon.setAttribute('class', 'icon')
        icon.setAttribute('tabindex', '0')

        const info = document.createElement('span')
        info.setAttribute('class', 'info')

        // Lendo informações dos atributos da tag
        const text = this.getAttribute('data-text')
        info.textContent = text;
        // logica condicional para uma imagem
        let imgUrl
        if(this.hasAttribute('img')){
            imgUrl = this.getAttribute('img')
        }else{
            imgUrl = 'default.png' //Imagem padrão a ser utilizada
        }
        const img = document.createElement('img')
        img.src = imgUrl
        img.setAttribute('alt', 'Icone de  informação')
        img.setAttribute('width', '100px')

        // hierarquia
        icon.appendChild(img)
        wrapper.appendChild(icon)
        wrapper.appendChild(info)

        //anexar tudo ao componente
        this.appendChild(wrapper)
    }
}

customElements.define('popup-info', Popupinfo)
// registro do navegador para que a nossa tag passe a realmente existir