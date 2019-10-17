const template = document.createElement('template');
template.innerHTML = `
    <style>

        form-input {
            width: 950px;
            height: 30px;


        }
      


        
        
        input[type=submit] {
            visibility: collapse;
        }

        .form{
          width : 400px;
          border: 2px solid #CA2C92;
        }

        #main_list{
            height : 100%;
            display: flex;
            flex-direction : column;
            align-items: center;
        }
    </style>
    
  
    <form>   
    <message-field-head></message-field-head> 
        <div id = "main_list">
            
            <message-field></message-field>
            <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
        </div>
    </form>
    
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$message_field = this.shadowRoot.querySelector('message-field');


    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
    this.$check = 1;
  }


  onSubmit(event) {
    let user = 'me';
    const currentdate = new Date();
    event.preventDefault();

    if (this.$input.value === '') {
      return false;
    }

    const text = this.$input.value;
    const time = `${currentdate.getHours()}:${currentdate.getMinutes()}`;

    if (this.$check > 0) {
      user = 'me';
    }
    if (this.$check < 0) {
      user = 'not_me';
    }

    this.$check = this.$check * -1;

    const messageInformation = {
      owner: user,
      text,
      time,
    };

    this.$message_field.createMessage(messageInformation);

    this.$input.clear();

    return 0;
  }


  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}


customElements.define('message-form', MessageForm);
