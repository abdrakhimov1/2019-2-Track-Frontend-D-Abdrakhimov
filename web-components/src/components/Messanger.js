const template = document.createElement('template');
template.innerHTML = `
    <style>


    #messanger {
        display : flex;
        flex-direction : row;
        position: relative;
        }
    
    #friend-list{
    }

    .message-form{
         
    }
    
    </style>

    <form id="messanger">
        <friend-list></friend-list>
        <message-form ></message-form>
        <ad-form></ad-form>
    </form>
    

    
`;

class Messanger extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$message_field = this.shadowRoot.querySelector('message-form');
    this.$message_field = this.shadowRoot.querySelector('ad-form');
    this.$friend_list = this.shadowRoot.getElementById('friend-list');
  }
}

customElements.define('my-messanger', Messanger);
