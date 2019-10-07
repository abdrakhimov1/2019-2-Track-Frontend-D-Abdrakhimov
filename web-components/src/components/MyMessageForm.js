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
        }


    .mymessage span{
        align-self: flex-start;
        
        border-radius: 5px;
        padding: 5px;
        word-break: break-word;
        background: #F8C7E3;
      }

    #name{
        
        display: inline-block;
        color : #9C326E;
        font-weight : bold;
        font-size : medium;
        margin: 0 5px;
        
        
    }

    #time{
        
        display: inline-block;
        color : #7A6470;
        font-style: italic;
        font-size : x-small;
        margin: 0 5px;
        
        
    }

    .message_information{
        
        display : flex;
        flex-direction: row;
        margin: 0 -5px;
        
        
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

class MyMessageForm extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$message_text = this.shadowRoot.getElementById('messagetext');
        this.$message_name = this.shadowRoot.getElementById('name');
        this.$message_time = this.shadowRoot.getElementById('time');
    }

    _setMessage(message_information) {

        this.$message_text.textContent = message_information.text;
        this.$message_time.textContent = message_information.time;
        //FIXME Изменить Юзера
        this.$message_name.textContent = 'Danny';

    }
}

customElements.define('new-my-message-form', MyMessageForm);