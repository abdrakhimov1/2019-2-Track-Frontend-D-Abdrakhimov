const template = document.createElement('template');
template.innerHTML = `
    <style>

        #friend_list{
            background : green;
            height: 100%; 
            width: 400px;
            border: 2px solid black;
        }
    
    </style>

    <user-form></user-form>
    <list-unit></list-unit>
    <list-unit></list-unit>
    <list-unit></list-unit>
    <list-unit></list-unit>
    <list-unit></list-unit>
    <list-unit></list-unit>
    <list-unit></list-unit>
    <list-unit></list-unit>
    <list-unit></list-unit>
    

    
`;

class FriendListForm extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$field = this.shadowRoot.getElementById('friend_list');
        this.user_form = this.shadowRoot.querySelector('user-form');
        this.user_form = this.shadowRoot.querySelector('list-unit');
    }


}

customElements.define('friend-list', FriendListForm);