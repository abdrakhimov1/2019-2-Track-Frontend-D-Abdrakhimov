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
        }
    
    </style>
    <div id = "full_form">
        <img id=useful_icons src ="https://cdn.icon-icons.com/icons2/1904/PNG/512/gallery_121253.png">
        <input type="text">
        <img id=useful_icons src ="https://cdn.icon-icons.com/icons2/1904/PNG/512/heart_121311.png">
        <img id=useful_icons src ="https://cdn.icon-icons.com/icons2/1904/PNG/512/file_121247.png">
        
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
