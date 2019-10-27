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

    #icon{
        transition: 1s;
    }

    #icon:hover {
        transform: scale(1.2);
       }

    #back_button{
        transition: 1s;
    }

    #back_button:hover {
        transform: scale(1.2);
       }
    
    </style>

    <div id ="header">
        <img id = "back_button" src ="components/img/back.png" style ="color:white; height:50px; filter: invert(1);">
        <img src="components/img/avatar.png" alt="" class="round">
        <div id = "name-column">
            <div id = "name"></div>
            <div id = "last_seen"></div>
        </div>
        <img id = "icon" src ="components/img/search.png" style ="color:white; height:50px; filter: invert(1);">
        <img id = "icon" src ="components/img/info.png" style ="color:white; height:50px; filter: invert(1);">
    </div>
    
`;

class MessageFieldHead extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$field = this.shadowRoot.getElementById('header');
    this.$name = this.shadowRoot.getElementById('name');
    this.$name.textContent = 'John';
    this.$last_seen = this.shadowRoot.getElementById('last_seen');
    this.$last_seen.textContent = 'Last seen: today at 10:53';
    this.$back_button = this.shadowRoot.getElementById('back_button');
    this.$back_button.onclick = this.Back;
    this.$status = 0;
  }

  Back() {
    const tempDiv = document.createElement('my-messanger');
    document.getElementById('container').innerHTML = '';
    document.getElementById('container').insertAdjacentElement('afterbegin', tempDiv);
    return this.$status;
  }
}

customElements.define('message-field-head', MessageFieldHead);
