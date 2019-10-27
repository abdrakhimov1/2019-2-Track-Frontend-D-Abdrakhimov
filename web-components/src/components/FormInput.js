const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width :700px;
            
            height: 50px;
            
            font-size : 50px;
            margin-left : 20px;
            margin-right : 20px;
            
        }


        #full_form{
            display : flex;
            position: fixed;
            bottom: 0;
            background : white;
        }
        
        #useful_icons{
          margin-left : 20px;
          height:50px;
          transition: 1s;
        }
  
        #useful_icons:hover {
          transform: scale(1.2);
         }
    
    </style>
    <div id = "full_form">
        <img id=useful_icons src ="components/img/photo.png">
        <input type="text">
        <img id=useful_icons src ="components/img/heart.png">
        <img id=useful_icons src ="components/img/document.png">
        
    </div>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  clear() {
    this.$input.value = '';
  }
}

customElements.define('form-input', FormInput);
