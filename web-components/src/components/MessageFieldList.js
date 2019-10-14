const template = document.createElement('template');
template.innerHTML = `
    <style>
        #user{
            justify-content: center;
            align-items: center;
            display : flex;
            background : #FFDAEE;
            border: 2px solid white;
            width : 300px;
            height : 1000px;
        }

        



    </style>

    <form id="user">
        
    </form>
    

    
`;

class FieldList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));


    }

}

customElements.define('field-list', FieldList);