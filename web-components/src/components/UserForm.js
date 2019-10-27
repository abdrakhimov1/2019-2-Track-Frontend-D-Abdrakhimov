const template = document.createElement('template');
template.innerHTML = `
    <style>
        #user{
            justify-content: space-between;
            align-items: center;
            display : flex;
            flex-direction : row;
            background : #8E24AA;
            
            width : 100%;
            height : 150px;
            box-shadow: 0 0px 5px;
        }

        #name{
            line-height  : 80px;
            color : #FFFFFF;
            font-size: 40px;
            font-weight: bolder;
            
        }

        #menu:before {
            position: absolute;
            font-family: Font Awesome 5 Brands;
            top: 20px;
            left: 0;
            content: "\f17e";
            color:blue;
        }

        .round {
            border-radius: 100px; 
           }





    </style>
    <form id="user">
        <img src ="components/img/menu.png" style ="color:white; height:90px; filter: invert(1);">
        <img  src="components/img/avatar.png" alt="" class="round" height="90" width="90" >
        <div id = "name"></div>
        <img src ="components/img/search.png" style ="color:white; height:50px; filter: invert(1);">
    </form>
    

    
`;

class UserForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$logout_button = this.shadowRoot.querySelector('logout-button');
    this.$photo = this.getElementsByClassName('round');
    this.$friend_list = this.shadowRoot.getElementById('user');
    this.$menu = this.shadowRoot.getElementById('menu');
    this.$name = this.shadowRoot.getElementById('name');
    this.$name.textContent = 'Messenger';
  }
}

customElements.define('user-form', UserForm);
