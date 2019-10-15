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
    this.$messageList = [];
  }

  createMessage(messageInformation) {
    if (messageInformation.owner === 'me') {
      const message = document.createElement('new-my-message-form');
      message.setMessage(messageInformation);
      this.$field.appendChild(message);
      const messageJson = {
        name: message.$message_name.textContent,
        text: message.$message_text.textContent,
        time: message.$message_time.textContent,
      };
      this.$messageList.push(messageJson);
    }

    if (messageInformation.owner === 'not_me') {
      const message = document.createElement('new-friend-message-form');
      message.setMessage(messageInformation);
      this.$field.appendChild(message);
      const messageJson = {
        name: message.$message_name.textContent,
        text: message.$message_text.textContent,
        time: message.$message_time.textContent,
      };
      this.$messageList.push(messageJson);
    }
    localStorage.clear();
    if (localStorage.message_list != null) {
      localStorage.message_list = localStorage.message_list.concat(this.$messageList);
    } else {
      localStorage.message_list = this.$messageList;
    }
  }
}

customElements.define('message-field', MessageField);
