const template = document.createElement('template');
template.innerHTML = `
    <style>

        #friend_list{
            height: 100%; 
            width: 100%;
            
        }

        
    
    </style>
        <div id = friend_list>  
            <user-form></user-form>
        </div>

    
`;

class FriendListForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$field = this.shadowRoot.getElementById('friend_list');
    this.user_form = this.shadowRoot.querySelector('user-form');
    this.user_form = this.shadowRoot.querySelector('list-unit');
  }
}

customElements.define('friend-list', FriendListForm);
