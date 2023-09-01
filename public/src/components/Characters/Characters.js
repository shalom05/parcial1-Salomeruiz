class Characters extends HTMLElement {

    static get observedAttributes(){
        return["name","alternate_names","species","gender","house","yearofbirth"];
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Characters/Characters.css">
        <section>
        <h1>${this.name}</h1>
        <h3>Alternate: ${this.alternate_names}</h3>
        <h3<strong>Specie: ${this.species}</strong>></h3>
        <h3<strong>${this.gender}</strong>></h3>
        <p>${this.house}</p>
        <p>${this.yearofbirth}</p>
        </section>
        `
    }
}

customElements.define("my-character",Characters);
export default Characters;