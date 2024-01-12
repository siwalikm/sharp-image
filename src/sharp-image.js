class SharpImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.defaultSrc = 'default-image.jpg'; // default image source
    this.defaultAlt = 'default alt text'; // default alt text
    this.defaultWidth = 'auto'; // default width
    this.defaultHeight = 'auto'; // default height
    this.defaultMaxWidth = '100%'; // default max width
    this.defaultMaxHeight = '100%'; // default max height
    this.defaultTitle = ''; // default title
  }

  static get observedAttributes() {
    return ['src', 'alt', 'width', 'height', 'maxWidth', 'maxHeight', 'title']; // observe these attributes
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
  }

  _reflectPropertiesToAttributes(property, value) {
    // Reflect properties to attributes here
    if (this.getAttribute(property) !== value)
      return this.setAttribute(property, value);
  }

  connectedCallback() {
    this.render();
    window.addEventListener('resize', this.render.bind(this));
  }

  disconnectedCallback() {
    this.observer.disconnect();
    window.removeEventListener('resize', this.render.bind(this));
  }

  render() {
    const src = this.getAttribute('src') || this.defaultSrc;
    const alt = this.getAttribute('alt') || this.defaultAlt;
    const width = this.getAttribute('width') || this.defaultWidth;
    const height = this.getAttribute('height') || this.defaultHeight;
    const maxWidth = this.getAttribute('maxWidth') || this.defaultMaxWidth;
    const maxHeight = this.getAttribute('maxHeight') || this.defaultMaxHeight;
    const title = this.getAttribute('title') || this.defaultTitle;

    // debugger

    this.shadowRoot.innerHTML = `
          <style>
          .sharp-image-parent {
            position: relative;
            width: ${width};
            height: ${height};
            max-width: ${maxWidth};
            max-height: ${maxHeight};
          }
  
          .sharp-image-shadow {
            mix-blend-mode: hard-light;
          }
          .sharp-image-shadow, .sharp-image-shadow::before, .sharp-image-shadow::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          .sharp-image-shadow::before, .sharp-image-shadow::after {
            content: "";
            background: url(${src}) no-repeat;
            background-size: cover;
          }
          .sharp-image-shadow::after {
            filter: invert(1);
            opacity: 0.5;
            top: -2px;
            left: -2px;
          }
          </style>
          <div class="sharp-image-parent">
            <img src="${src}" alt="${alt}" title="${title}" width="${width}" height="${height}"/>
          <div class="sharp-image-shadow"></div>
          </div>
        `;
  }
}

// Define the new element
customElements.define('sharp-image', SharpImage);