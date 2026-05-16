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
        this.attachShadow({mode: 'open'})
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
        // estilo confinado ao escopo do shadow dom
        const style = document.createElement('style')
        style.textContent = `
        .wrapper {position: relative;  display:inline-block}
        .info{
            visibility: hidden; width: 200px; background-color: #333; color: fff;
            text-align: center; padding: 10px; border-radius: 6px; position: absolute;
            z-index: 1; bottom: 125%; left: 50%; margin-left: -100px; opacity: 0; transition: opacity 0.3s;    
        }
        .icon::hover + .info{
            visibility: visible; opacity: 1;
        }
        `
        wrapper.appendChild(icon)
        wrapper.appendChild(info)

        //anexar tudo ao componente
        this.shadow.appendChild(icon)

        this.shadow.appendChild(wrapper)
    }
}

customElements.define('popup-info', Popupinfo)
// registro do navegador para que a nossa tag passe a realmente existir

