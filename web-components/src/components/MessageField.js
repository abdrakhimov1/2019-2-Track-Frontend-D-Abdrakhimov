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


    if (!localStorage.messageNumber) {
      localStorage.setItem('messageNumber', 0);
    }

    if (localStorage.messageNumber !== 0) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < localStorage.messageNumber; i++) { 
        const workingJson = JSON.parse(localStorage[i]);

        if (workingJson.user === 'Danny') {
          const text = workingJson.message_text;
          const time = workingJson.message_time;
          const messageInformation = {
            owner: workingJson.user,
            text,
            time };

          this.createMessage(messageInformation);
        }

        if (workingJson.user === 'Other User') {
          const text = workingJson.message_text;
          const time = workingJson.message_time;
          const messageInformation = {
            owner: workingJson.user,
            text,
            time,
          };
          this.createMessage(messageInformation);
        }
      }
    }
  }

  createMessage(messageInformation) {
    if (messageInformation.owner === 'me') {
      const message = document.createElement('new-my-message-form');
      message.setMessage(messageInformation);
      // eslint-disable-next-line max-len
      localStorage.setItem(localStorage.messageNumber, message.JsonMaker(localStorage.messageNumber));
      this.$field.appendChild(message);
      localStorage.messageNumber = +(localStorage.messageNumber) + 1;
    }

    if (messageInformation.owner === 'not_me') {
      const message = document.createElement('new-friend-message-form');
      message.setMessage(messageInformation);
      this.$field.appendChild(message);
      // eslint-disable-next-line max-len
      localStorage.setItem(localStorage.messageNumber, message.JsonMaker(localStorage.messageNumber));
      localStorage.messageNumber = +(localStorage.messageNumber) + 1;
    }
  }
}

customElements.define('message-field', MessageField);
