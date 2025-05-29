class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        button {
          background-color: red;
        }
      </style>
      <button>커스텀 버튼</button>
    `;
  }
}
customElements.define('custom-button', CustomButton);