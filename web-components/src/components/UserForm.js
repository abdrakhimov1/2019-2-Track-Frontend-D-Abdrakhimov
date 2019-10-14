const template = document.createElement('template');
template.innerHTML = `
    <style>
        #user{
            justify-content: center;
            align-items: center;
            display : flex;
            background : #8E24AA;
            
            width : 100%;
            height : 150px;
        }

        #name{
            line-height  : 80px;
            color : #FFFFFF;
            font-size: 40px;
            font-weight: bolder;
        }

        #menu:before {
            position: absolute;
            font-family: Font Awesome\ 5 Brands;
            top: 20px;
            left: 0;
            content: "\f17e";
            color:blue;
        }

        .round {
            border-radius: 100px; 
           }





    </style>
    <head>
    
    </head>
    <form id="user">
    
    

    <img  src="https://icon-icons.com/icons2/1744/PNG/48/3643763-list-mark-menu-option-sign_113447.png" height="55" width="58" >
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
        this.$photo = this.getElementsByClassName('round')
        this.$friend_list = this.shadowRoot.getElementById('user');
        this.$menu = this.shadowRoot.getElementById('menu');
        this.$name = this.shadowRoot.getElementById('name');
        this.$name.textContent = "Messenger";
    }

}

customElements.define('user-form', UserForm);