const template = document.createElement('template');
template.innerHTML = `
    <style>
    #header{
        display : flex;
        height: 80px;
        line-height  : 80px;
        width: 100%;
        opacity: 0.6;
        margin-top : 10px;
    }

    #header:hover {
        opacity: 1;
      }

    #name_plus_message{
        border-bottom: 1px solid black;
        height : 70px;
        width : 100%;
        display : flex;
        flex-direction : column;
    }

    #name{
        color : #CA2C92;
        font-size: x-large;
        font-weight: bolder;
        margin-right : 30px;
        height : 30px;
        line-height  : 30px;
    }

    #last_seen{
        line-height  : 30px;
        color : #CA2C92;
        font-style: italic;
        width : 100%;
        height : 30px;
    }

    .round {
        margin-right : 30px;
        border-radius: 100px;
       }

    </style>

    <div id ="header">
        <img src="https://i01.fotocdn.net/s109/936c470840eecc0b/user_xl/2431641802.jpg" alt="" class="round" height="50" width="50">
        <div id = 'name_plus_message'>
            <div id = "name"></div>
            <div id = "last_seen"></div>
        </div>
    </div>
    
`;

class ListUnit extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$field = this.shadowRoot.getElementById('header');
    this.$name = this.shadowRoot.getElementById('name');
    this.$name.textContent = 'Friend';
    this.$last_seen = this.shadowRoot.getElementById('last_seen');
    this.$last_seen.textContent = 'Начало последнего сообщения';
    this.$field.onclick = this.Chat;
    this.$status = 0;
  }

  Chat() {
    const tempDiv = document.createElement('message-form');
    document.getElementById('container').innerHTML = '';
    document.getElementById('container').insertAdjacentElement('afterbegin', tempDiv);
    return this.$status;
  }
}

customElements.define('list-unit', ListUnit);
