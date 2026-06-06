export class ProfileCard extends HTMLElement {
    // array estático indicando os atributos sob vigillância do navegador
    static get observedAttributes(){
        return ['nome', 'bio']
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue){
    if(oldValue === newValue) return;

    if(name === 'nome'){
        this.shadowRoot.querySelector('.nome').textContent = newValue
    }
    if(name === 'bio'){
        this.shadowRoot.querySelector('.bio').textContent = newValue;
    }
}
}
customElements.define('profile-card', ProfileCard);

// attributeChangeCallback