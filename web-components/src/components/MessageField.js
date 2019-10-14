const template = document.createElement('template');
template.innerHTML = `
    <style>


    #field {
        display : flex;
        flex-direction : column; 
        width: 900px;
        height : 100%;
        
        position: relative;
        
        margin-bottom : 30px;
        margin-top : 130px;
        }
    
    </style>

    <div id ="field"></div>
    

    
`;

class MessageField extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$field = this.shadowRoot.getElementById('field');
    this.$back = this.shadowRoot.getElementById('back');
  }

  createMessage(messageInformation) {
    if (messageInformation.owner === 'me') {
      const message = document.createElement('new-my-message-form');
      message.setMessage(messageInformation);
      this.$field.appendChild(message);
    }

    if (messageInformation.owner === 'not_me') {
      const message = document.createElement('new-friend-message-form');
      message.setMessage(messageInformation);
      this.$field.appendChild(message);
    }
  }
}

customElements.define('message-field', MessageField);
