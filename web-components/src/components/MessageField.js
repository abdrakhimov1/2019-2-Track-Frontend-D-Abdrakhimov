const template = document.createElement('template');
template.innerHTML = `
    <style>


    #field {
        display : flex;
        flex-direction : column; 
        align-self: flex-start;
        position: relative;
        }
    
    </style>

    <div id ="field"></div>

    
`;

class MessageField extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$field = this.shadowRoot.getElementById('field');
        this.$back = this.shadowRoot.getElementById('back');

    }

    _createMessage(message_information) {

        if (message_information.owner === "me") {
            var message = document.createElement('new-my-message-form');
            message._setMessage(message_information);
            this.$field.appendChild(message);
        }

        if (message_information.owner === "not_me") {
            var message = document.createElement('new-friend-message-form');
            message._setMessage(message_information);
            this.$field.appendChild(message);
        }
    }
}

customElements.define('message-field', MessageField);