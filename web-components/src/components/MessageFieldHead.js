const template = document.createElement('template');
template.innerHTML = `
    <style>
    #header{
        display : flex;
        justify-content : space-around;
        height: 80px;
        background: #CA2C92;
        border: 2px solid black;
        line-height  : 80px;
        
    }

    .round {
        border-radius: 10px; 
        border: 5px solid black;
        background : white;
        box-shadow: 0 0 7px #666; 
        width: 70px; 
        height: 70px;
        
        border-radius: 50%;
       }

    #name{
        color : #FFDAEE;
        font-size: xx-large;
        font-weight: bolder;
    }

    #last_seen{
        color : #FFDAEE;
        font-style: italic;
        
    }

    
    </style>

    <div id ="header">
        <div class="round"></div>
        <div id = "name"></div>
        <div id = "last_seen"></div>
        
    </div>
    
`;

class MessageFieldHead extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$field = this.shadowRoot.getElementById('header');
        this.$name = this.shadowRoot.getElementById('name');
        this.$name.textContent = "Best Friend";
        this.$last_seen = this.shadowRoot.getElementById('last_seen');
        this.$last_seen.textContent = "Last seen: today at 10:53";


    }
}

customElements.define('message-field-head', MessageFieldHead);