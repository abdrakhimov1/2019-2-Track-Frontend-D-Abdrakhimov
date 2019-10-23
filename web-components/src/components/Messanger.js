const template = document.createElement('template');
template.innerHTML = `
    <style>


    #messanger {

        }
    
    #friend-list{
    }

    .message-form{
         
    }

    #list-of-messages{
      display : flex;
      flex-direction : column-reverse;
    }

    </style>

    <form id="messanger">
        
        <friend-list></friend-list>
        <div id='list-of-messages'>
          <list-unit></list-unit>
          <list-unit></list-unit>
          <list-unit></list-unit>
          <list-unit></list-unit>
          <list-unit></list-unit>
        </div>
        <my-button></my-button>
        
    </form>

`;

class Messanger extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$message_field = this.shadowRoot.querySelector('message-form');
    this.$listOfMessages = this.shadowRoot.getElementById('list-of-messages');
    this.$superButton = this.shadowRoot.querySelector('my-button');
    this.$superButton.onclick = this.AddChat;
  }
  AddChat() {
    //  потом добавлю открытие меню для создания нового сообщения
    this.$chat = document.createElement('list-unit');
    this.$listOfMessages.appendChild(this.$chat);
    return false;
  }
}
customElements.define('my-messanger', Messanger);
