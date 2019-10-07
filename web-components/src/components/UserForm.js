const template = document.createElement('template');
template.innerHTML = `
    <style>
        #user{
            justify-content: center;
            align-items: center;
            display : flex;
            background : #FF31A5;
            border: 2px solid white;
            width : 300px;
            height : 80px;
        }

        #name{
            line-height  : 80px;
            color : #FFDAEE;
            font-size: 40px;
            font-weight: bolder;
        }



    </style>

    <form id="user">
        <div id = "name"></div>
        <logout-button id = "logout-button"></logout-button>
    </form>
    

    
`;

class UserForm extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$logout_button = this.shadowRoot.querySelector('logout-button');
        this.$friend_list = this.shadowRoot.getElementById('user');
        this.$name = this.shadowRoot.getElementById('name');
        this.$name.textContent = "Danny";
    }

}

customElements.define('user-form', UserForm);