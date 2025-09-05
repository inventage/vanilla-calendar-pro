class CustomElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.linkEl());
    this.div = this.addStyledDiv();
    shadow.appendChild(this.div);
  }

  linkEl() {
    const el = document.createElement('link');
    el.setAttribute('rel', 'stylesheet');
    el.setAttribute('href', 'package/dist/styles/index.css');
    return el;
  }

  addStyledDiv() {
    const el = document.createElement('div');
    el.textContent = 'click here';
    el.style.display = 'flex';
    el.style.justifyContent = 'center';
    el.style.alignItems = 'center';
    el.style.minWidth = '80px';
    el.style.maxWidth = 'min-content';
    el.style.minHeight = '40px';
    el.style.border = '1px solid #000';
    return el;
  }

  connectedCallback() {
    this.calendar = new VanillaCalendarPro.Calendar(this.div, {
      inputMode: true,
    });
    this.calendar.init();
  }
}

customElements.define('custom-element', CustomElement);
