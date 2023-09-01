import * as components from "./components/indexH.js"
import data from "./data.js"

class AppContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((information)=> {
        this.shadowRoot.innerHTML += `
        <my-character name="${information.name}" alternate_names="${information.alternate_names}" species="${information.species}" gender="${information.gender}" house="${information.house}" yearofbirth="${information.yearOfBirth}"></my-character>
        <my-button message="Cambiar de nombre"></my-button>
        `
    }   
        )}

}

customElements.define("app-container",AppContainer);
