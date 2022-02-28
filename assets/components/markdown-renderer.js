import {LitElement, html} from 'lit';
import { marked, } from 'marked';

export default class MarkdownRenderer extends LitElement {

  constructor() {
    super();
    console.log(marked.parse('# Marked in the browser\n\nRendered by **marked**.'));
  }

  // Render the UI as a function of component state
  render() {
    return html`
    <div>
      ${document.createRange().createContextualFragment(marked.parse('# Marked in the browser\n\nRendered by **marked**.'))}
    </div>
    `;
  }
}
