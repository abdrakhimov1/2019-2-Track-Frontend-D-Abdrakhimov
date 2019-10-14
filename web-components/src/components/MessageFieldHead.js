const template = document.createElement('template');
template.innerHTML = `
    <style>
    #header{
        display : flex;
        justify-content : space-around;
        align-items: center;
        height: 120px;
        background: #8E24AA;
        border: 2px solid #8E24AA;
        
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1;
        
    }

    .round {
        
        background : white;
        box-shadow: 0 0 7px #666; 
        width: 100px; 
        height: 100px;
        
        border-radius: 50%;
       }

    #name{
        color : white;
        font-size: xx-large;
        font-weight: bolder;
        margin-bottom: 10px;
    }

    #last_seen{
        color : white;
        font-style: italic;
        
    }

    #name_column{
        display : flex;
        flex-direction : column;
        align-items: center;
    }

    
    </style>

    

    <div id ="header">
        <img src ="https://icon-icons.com/icons2/1863/PNG/48/arrow-back_119433.png" style ="color:white; height:50px; filter: invert(1);">
        <img src="https://i01.fotocdn.net/s109/936c470840eecc0b/user_xl/2431641802.jpg" alt="" class="round">
        <div id = "name-column">
            <div id = "name"></div>
            <div id = "last_seen"></div>
        </div>
        <img src ="https://icon-icons.com/icons2/1863/PNG/48/search_118692.png" style ="color:white; height:50px; filter: invert(1);">
        <img src ="https://icon-icons.com/icons2/1863/PNG/48/error-outline_119185.png" style ="color:white; height:50px; filter: invert(1);">
    </div>
    
`;

class MessageFieldHead extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$field = this.shadowRoot.getElementById('header');
        this.$name = this.shadowRoot.getElementById('name');
        this.$name.textContent = "John";
        this.$last_seen = this.shadowRoot.getElementById('last_seen');
        this.$last_seen.textContent = "Last seen: today at 10:53";


    }
}

customElements.define('message-field-head', MessageFieldHead);