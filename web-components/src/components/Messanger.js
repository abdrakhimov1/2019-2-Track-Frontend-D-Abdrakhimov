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
        
        <message-form ></message-form>
        
    </form>
    

    
`;

class Messanger extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$message_field = this.shadowRoot.querySelector('message-form');
  }
}

customElements.define('my-messanger', Messanger);
