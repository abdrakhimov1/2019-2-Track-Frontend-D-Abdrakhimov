const template = document.createElement('template');
template.innerHTML = `
    <style>
        #user{
            justify-content: center;
            align-items: center;
            display : flex;
            background : #FFDAEE;
            border: 2px solid white;
            width : 300px;
            height : 900px;
        }

        #name{
            line-height  : 80px;
            color : black;
            font-size: x-large;
            font-weight: bolder;
        }



    </style>

    <form id="user">
        <div id = "name"></div>
        
    </form>
    

    
`;

class AdForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$friend_list = this.shadowRoot.getElementById('user');
    this.$name = this.shadowRoot.getElementById('name');
    this.$name.textContent = 'Реклама для Mail.ru';
  }
}

customElements.define('ad-form', AdForm);
