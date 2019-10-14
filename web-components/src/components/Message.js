const template = document.createElement('template');
template.innerHTML = `
    <style>

        #text{
            font-size:20px;
            line-height : 25px;
            color:black;
            face:Arial;
            
        }

        #date{
            font-size:15px;
            color:black;
            face:Arial;
            font-style: italic;
            float: right;
            display: flex;
            line-height : 5px;
        }

        #user{
            font-size:70px;
            color:black;
            face:Arial;
            font-style: bolt;
            
        }

        #rectangle1 {
            
            height: 45px;
            background: #FFD6F3;
            border: 2px solid black;
            border-radius: 2px;
            
            
        }

        #rectangle2 {
            
            height: 20px;
            background: #FCB4D5;
            border: 2px solid black;
            border-radius: 5px;
        }
        
    </style>
    <form>
        <div class="message"></div>
    </form>
`;

class Message extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$box = this.shadowRoot.querySelector('.box');

    this.$text = this.shadowRoot.querySelector('.text');
    this.$time = this.shadowRoot.querySelector('.time');
    this.$message = this.shadowRoot.querySelector('.message');
    this.$message_owner = 'me';
    this.$user = 'Danny';
    // h1 = document.getElementsByTagName('h1')[0];
    // h1.innerHTML = 'hello, ' + this.$text;

    // var message = document.getElementById('div');
    // var m = document.createElement('m');


    // message.appendChild('lol');
  }

  addMessage() {
    const line = document.createElement('message');
    if (this.$message_owner === 'me') {
      line.innerHTML = this.$user + this.$text + this.$time;
    }
    if (this.$message_owner === 'not_me') {
      line.innerHTML = `<div id = "rectangle2" > ${this.$text}${this.$time}`;
    }
    this.$message.appendChild(line);
  }

  getDate() {
    return this.$time;
  }

  getUser() {
    return this.$user;
  }

  getMessage() {
    return this.$text;
  }

  JsonMaker(messageNumber) {
    const messageForLocalStorage = {
      user: this.getUser(),
      message: this.getMessage(),
      date: this.getDate(),
      number: messageNumber,
    };

    const json = JSON.stringify(messageForLocalStorage);

    return json;
  }
}

customElements.define('mess-form', Message);
