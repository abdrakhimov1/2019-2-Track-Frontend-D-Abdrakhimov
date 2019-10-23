const template = document.createElement('template');
template.innerHTML = `
    <style>
    .gradient-btn {
      background : black;
      position: fixed;
      bottom: 3%;
      right: 1%;
      transform: translate(-50%, -50%);
      width: 280px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-family: sans-serif;
      font-size: 24px;
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 6px;
      transition: .5s;
      //background-color: #000;
      border: 4px solid #fff;
      border-radius: 60px;
      box-shadow: 0 5px 20px rgba(0,0,0, .5);
      overflow: hidden;
    }
    .gradient-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to left, #1366ff, #ff0b6d);
      z-index: -1;
      border-radius: 60px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform .5s ease-in-out;
    }
    .gradient-btn:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }

    .gradient-btn:active{
      background-color: darken($button-bg, 5%);
      box-shadow: 0 2px 25px #8E24AA;
    }
    
    </style>

    <a class="gradient-btn" href="#!">New message</a>
`;

class ButtonNewMessage extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$gradientButton = this.shadowRoot.querySelector('gradient-btn');
  }
}

customElements.define('my-button', ButtonNewMessage);
