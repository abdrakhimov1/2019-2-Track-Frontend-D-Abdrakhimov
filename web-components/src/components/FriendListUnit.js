const template = document.createElement('template');
template.innerHTML = `
    <style>
    #header{
        display : flex;
        justify-content : space-around;
        height: 80px;
        background: #FFDAEE;
        border: 2px solid #CA2C92;
        line-height  : 80px;
        width: 100%;
        opacity: 0.6;
        
    }

    #header:hover {
        opacity: 1;
      }

    .round {
        border-radius: 10px; 
        border: 5px solid black;
        background : white;
        box-shadow: 0 0 7px #666; 
        width: 50px; 
        height: 50px;
        
        border-radius: 50%;
       }

    #name{
        color : #CA2C92;
        font-size: x-large;
        font-weight: bolder;
    }

    #last_seen{
        color : #CA2C92;
        font-style: italic;
        
    }

    
    </style>

    <div id ="header">
        
        <div id = "name"></div>
        <div id = "last_seen"></div>
        
    </div>
    
`;

class ListUnit extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$field = this.shadowRoot.getElementById('header');
    this.$name = this.shadowRoot.getElementById('name');
    this.$name.textContent = 'Друг';
    this.$last_seen = this.shadowRoot.getElementById('last_seen');
    this.$last_seen.textContent = 'Начало последнего сообщения';
  }
}

customElements.define('list-unit', ListUnit);
