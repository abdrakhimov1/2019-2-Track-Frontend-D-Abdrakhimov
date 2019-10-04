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


        .toggle{
            --uiToggleSize: var(--toggleSize, 15px);
            --uiToggleIndent: var(--toggleIndent, .4em);
            --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);
            --uiToggleColor: var(--toggleColor, #000);
            --uiToggleDisabledColor: var(--toggleDisabledColor, #868e96);
            --uiToggleBgColor: var(--toggleBgColor, #fff);
            --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);
            --uiToggleArrowColor: var(--toggleArrowColor, #fff);
          
            display: inline-block;
            position: relative;
          }
          
          .toggle__input{
            position: absolute;
            left: -99999px;
          }
          
          .toggle__label{
            display: inline-flex;
            cursor: pointer;
            min-height: var(--uiToggleSize);
            padding-left: calc(var(--uiToggleSize) + var(--uiToggleIndent));
          }
          
          .toggle__label:before, .toggle__label:after{
            content: "";
            box-sizing: border-box;  
            width: 1em;
            height: 1em;
            font-size: var(--uiToggleSize);
          
            position: absolute;
            left: 0;
            top: 0;
          }
          
          .toggle__label:before{
            border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);
            z-index: 2;
          }
          
          .toggle__input:disabled ~ .toggle__label:before{
            border-color: var(--uiToggleDisabledColor);
          }
          
          .toggle__input:focus ~ .toggle__label:before{
            box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
          }
          
          .toggle__input:not(:disabled):checked:focus ~ .toggle__label:after{
            box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
          }
          
          .toggle__input:not(:disabled) ~ .toggle__label:after{
            background-color: var(--uiToggleColor);
            opacity: 0;
          }
          
          .toggle__input:not(:disabled):checked ~ .toggle__label:after{
            opacity: 1;
          }
          
          .toggle__text{
            margin-top: auto;
            margin-bottom: auto;
            color : black;
          }
          
          /*
          The arrow size and position depends from sizes of square because I needed an arrow correct positioning from the top left corner of the element toggle
          */
          
          .toggle__text:before{
            color : black;
            content: "";
            box-sizing: border-box;
            width: 0;
            height: 0;
            font-size: var(--uiToggleSize);
          
            border-left-width: 0;
            border-bottom-width: 0;
            border-left-style: solid;
            border-bottom-style: solid;
            border-color: var(--uiToggleArrowColor);
          
            position: absolute;
            top: .5428em;
            left: .2em;
            z-index: 3;
          
            transform-origin: left top;
            transform: rotate(-40deg) skew(10deg);
          }
          
          .toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
            width: .5em;
            height: .25em;
            border-left-width: var(--uiToggleArrowWidth);
            border-bottom-width: var(--uiToggleArrowWidth);
            will-change: width, height;
            transition: width .1s ease-out .2s, height .2s ease-out;
          }
          
          /*
          =====
          LEVEL 2. PRESENTATION STYLES
          =====
          */
          
          /* 
          The demo skin
          */
          
          .toggle__label:before, .toggle__label:after{
            border-radius: 2px;
          }
          
          /* 
          The animation of switching states
          */
          
          .toggle__input:not(:disabled) ~ .toggle__label:before,
          .toggle__input:not(:disabled) ~ .toggle__label:after{
            opacity: 1;
            transform-origin: center center;
            will-change: transform;
            transition: transform .2s ease-out;
          }
          
          .toggle__input:not(:disabled) ~ .toggle__label:before{
            transform: rotateY(0deg);
            transition-delay: .2s;
          }
          
          .toggle__input:not(:disabled) ~ .toggle__label:after{
            transform: rotateY(90deg);
          }
          
          .toggle__input:not(:disabled):checked ~ .toggle__label:before{
            transform: rotateY(-90deg);
            transition-delay: 0s;
          }
          
          .toggle__input:not(:disabled):checked ~ .toggle__label:after{
            transform: rotateY(0deg);
            transition-delay: .2s;
          }
          
          .toggle__text:before{
            opacity: 0;
          }
          
          .toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
            opacity: 1;
            transition: opacity .1s ease-out .3s, width .1s ease-out .5s, height .2s ease-out .3s;
          }
          
          /*
          =====
          LEVEL 3. SETTINGS
          =====
          */
          
          .toggle{
            --toggleColor: #690e90;
            --toggleBgColor: #9b59b6;
            --toggleSize: 50px;
          }
          
          /*
          =====
          DEMO
          =====
          */
          
          body{
            min-height: 100vh;
            margin: 0;    
            display: flex;
            flex-direction: column;
            
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;  
            background-color: #9b59b6;
          }
          
          .page{
            margin: auto;  
            padding-left: 10px;
            padding-right: 10px;
            order: 1;
          }
          
          .page__toggle{
            font-size: 28px;
            font-weight: 700;
            color: #fff;
          }
          
          .page__toggle:nth-child(n+2){
            margin-top: 50px;
          }
          


    </style>
    
    <div class="page">
    <div class="page__toggle">
      <label id = "toggle" class="toggle" >
        <input  class="toggle__input"  type="checkbox" checked>
        <span class="toggle__label">
          <span class="toggle__text">Пишет собеседник</span>
        </span>
      </label>
    </div>
    <form>
        
        <div id = "header">
        
            <div id ="headerfont">Chat</div>
         
            
        </div>
        
        
        <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
        <mess-form>text</mess-form>
        <div class = message></div>
        
        
        
        
    </form>
    
`;

class MessageForm extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        //this.$message = this._shadowRoot.querySelector('.message');

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.toString().slice(0, -1) === "message") {
                this.$message = this._shadowRoot.querySelector('mess-form');
                data = JSON.parse(localStorage.getItem(key));

                this.$message = this.querySelector('mess-form');
                this.$message.$text = this.$input.value;

                alert(this.message);
                //this.$message.$time = currentdate.getHours() + ":" + currentdate.getMinutes();

                this.$message.$text = data.message;
                this.$message.$time = data.date;
                //this.$message._add_message();
            }
            //alert(`${key}: ${localStorage.getItem(key)}`);
        }

        this.$messageNumber = 0;

        this.$all_messages = [];
        this.$all_messages_time = [];

        // this.$a = this.getElementsByClassName("toggle__input");
        // //alert(this.$a);
        // this.$a.onclick = function() {
        //     //производим какие-то действия
        //     alert("works");
        //     //предотвращаем переход по ссылке href
        //     alert("works");
        //     return false;
        // }

        if (localStorage) {

        }

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
        this.$form.addEventListener('buutton', this._ButtonPushed.bind(this));
        localStorage.clear();
    }

    _onSubmit(event) {
        var currentdate = new Date();
        event.preventDefault();
        //this.$message = this.$input.value;

        //this._shadowRoot.appendChild(this.$message);
        this.$all_messages.push(this.$input.value);
        this.$all_messages_time.push(currentdate.getHours() + ":" + currentdate.getMinutes());

        this.$message = this._shadowRoot.querySelector('mess-form');
        this.$message.$text = this.$input.value;
        this.$message.$time = currentdate.getHours() + ":" + currentdate.getMinutes();
        //this._shadowRoot.appendChild(this.$message);


        localStorage["message" + this.$messageNumber.toString()] = this.$message.JsonMaker(this.$messageNumber);
        this.$messageNumber = this.$messageNumber + 1;
        this.$message._add_message();
        //alert(localStorage.length)
        // for (let i = 0; i < localStorage.length; i++) {
        //     let key = localStorage.key(i);
        //     alert(`${key}: ${localStorage.getItem(key)}`);
        // }


        //this.$message.appendChild(document.createTextnode('Asasd'));


        this.$input._clear();



        //console.log(this.$all_messages);
        console.log(this.$message.$text);
        //this._shadowRoot.appendChild(this.$message);

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