const template = document.createElement('template');
template.innerHTML = `
    <style>
        a {
            text-decoration: none;
            outline: none;
            display: inline-block;
            color: black;
            padding: 2px 30px;
            font-size : x-small;
            margin: 5px 20px;
            border-radius: 10px;
            border: 2px solid black;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            background-image: linear-gradient(to right, #FF00E0 0%, #FFEEFD 51%, #FF00E0 100%);
            background-size: 200% auto;
            box-shadow: 0 0 20px rgba(0,0,0,.1);
            transition: .5s;
        }
        a:hover {background-position: right center;}
     
    </style>
    
    <a id ="button" href="">Logout</a>

    

    
`;

class LogoutButton extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$button = this.shadowRoot.getElementById('button');
  }
}

customElements.define('logout-button', LogoutButton);
