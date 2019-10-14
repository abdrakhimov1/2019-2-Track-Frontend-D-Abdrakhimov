const template = document.createElement('template');
template.innerHTML = `
    <style>
    .mymessage {

        align-self: flex-start;
        position: relative;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        margin: 5px 0;
        margin-bottom : 20px;
        }

    .mymessage span{
        align-self: flex-start;
        
        border-radius: 5px;
        padding: 5px;
        word-break: break-word;
        background: #f1daf7;
        font-size : 30px;
      }

    #name{
        
        display: inline-block;
        color : black;
        font-weight : bold;
        font-size : 40px;
        margin: 0 5px;
        margin-bottom : 15px;
        
    }

    #time{
        
        display: inline-block;
        color : #7A6470;
        font-style: italic;
        font-size : medium;
        margin: 0 5px;
        
        
    }

    .message_information{
        
        display : flex;
        flex-direction: row;
        
        
        
    }
    </style>

    <div class ="mymessage">
        <div class ="message_information">
            <div id="name"></div>
            <div id ="time"></div> 
             
        </div>
        <span id = "messagetext"> 
      
      </span>
      
    </div>
    
`;

class FriendMessageForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$message_text = this.shadowRoot.getElementById('messagetext');
    this.$message_name = this.shadowRoot.getElementById('name');
    this.$message_time = this.shadowRoot.getElementById('time');
  }

  setMessage(messageInformation) {
    this.$message_text.textContent = messageInformation.text;
    this.$message_time.textContent = messageInformation.time;
    // FIXME Изменить Юзера
    this.$message_name.textContent = 'Другой юзер';
  }
}

customElements.define('new-friend-message-form', FriendMessageForm);
