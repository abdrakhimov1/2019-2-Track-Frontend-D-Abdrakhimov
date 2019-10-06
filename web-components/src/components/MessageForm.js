import { PassThrough } from "stream";

const template = document.createElement('template');
template.innerHTML = `
    <style>

        form-input {
            width: 100%;
            height: 80px;
            position: fixed;
            bottom: 0;
        }
        


        #header{
            height: 160px;
            background: #CA2C92;
            border: 2px solid black;
            
        }

        #headerfont{
            
            
            line-height : 160px;
            font-size: 60px;
            font-weight: lighter;
            color: #FFF8E7;
            
        }

        #form{
            
            
        }
        
        input[type=submit] {
            visibility: collapse;
        }
    </style>
    
    
  
    <form>    
    <message-field-head></message-field-head>

        <div id = "back"></div>
        <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
        <mess-form>text</mess-form>
        <div class = message></div>
        <message-field>asfasfas</message-field>
        
        
        
        
    </form>
    
`;

class MessageForm extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$message_field = this._shadowRoot.querySelector('message-field');



        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
        this.$check = 1;

    }



    _onSubmit(event) {
        var currentdate = new Date();
        event.preventDefault();

        if (this.$input.value === "") {
            return false;
        }

        var text = this.$input.value;
        var time = currentdate.getHours() + ":" + currentdate.getMinutes();
        //var user = "me";
        if (this.$check > 0) {
            var user = "me";
        }
        if (this.$check < 0) {
            var user = "not_me";
        }

        this.$check = this.$check * -1;

        let message_information = {
            owner: user,
            text: text,
            time: time,
        };

        this.$message_field._createMessage(message_information);

        this.$input._clear();


    }

    _ButtonPushed(event) {}

    _onKeyPress(event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }




}


customElements.define('message-form', MessageForm);

function f() {
    return 0;
}