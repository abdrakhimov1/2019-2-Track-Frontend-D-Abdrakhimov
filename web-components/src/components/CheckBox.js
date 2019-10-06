const template = document.createElement('template');
template.innerHTML = `
    <style>
    $primary: #4F2EDC
    $primary-light: #947ADA
    $gray: #9A9999
    
    html,body
      height: 100%
      
    .toggle
      position: relative
      display: block
      width: 40px
      height: 20px
      cursor: pointer
      -webkit-tap-highlight-color: transparent
      transform: translate3d(0,0,0)
      &:before
        content: ""
        position: relative
        top: 3px
        left: 3px
        width: 34px
        height: 14px
        display: block
        background: $gray
        border-radius: 8px
        transition: background .2s ease
      span
        position: absolute
        top: 0
        left: 0
        width: 20px
        height: 20px
        display: block
        background: white
        border-radius: 10px
        box-shadow: 0 3px 8px rgba($gray,.5)
        transition: all .2s ease
        &:before
          content: ""
          position: absolute
          display: block
          margin: -18px
          width: 56px
          height: 56px
          background: rgba($primary,.5)
          border-radius: 50%
          transform: scale(0)
          opacity: 1
          pointer-events: none
    
    #cbx:checked + .toggle
      &:before
        background: $primary-light
      span
        background: $primary
        transform: translateX(20px)
        transition: all .2s cubic-bezier(.8,.4,.3,1.25), background .15s ease
        box-shadow: 0 3px 8px rgba($primary,.2)
        &:before
          transform: scale(1)
          opacity: 0
          transition: all .4s ease
    
    //centering toggle
    .center
      position: absolute
      top: calc(50% - 10px)
      left: calc(50% - 20px)
    </style>
    <div class="center">
    <input type="checkbox" id="cbx" style="display:none"/>
    <label for="cbx" class="toggle"><span></span></label>    
  </div>

`;

class CheckBox extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        //this.$input = this._shadowRoot.querySelector('toggleButton');

        var toggle = this._shadowRoot.querySelector('.center')


    }
}

customElements.define('form-checkbox', CheckBox);