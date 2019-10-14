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
    </style>
    <div id = "full_form">
        <img src ="https://icon-icons.com/icons2/1863/PNG/48/photo-camera_118793.png"  height:50px;">
        <input type="text">
        <img src ="https://icon-icons.com/icons2/1863/PNG/48/sentiment-satisfied-alt_118686.png"  height:50px;" style = "margin-left : 20px;">
        <img src ="https://icon-icons.com/icons2/1863/PNG/48/description_119232.png"  height:50px;" style = "margin-left : 20px;">
        
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
