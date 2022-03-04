import { html, LitElement } from "lit";
import { marked } from "marked";

export default class MarkdownRenderer extends LitElement {
   static get properties() {
      return {
         content: { type: String },
      };
   }

   constructor() {
      super();
      console.log(this.content);
   }

   // Render the UI as a function of component state
   render() {
      return html` <div>${document.createRange().createContextualFragment(marked.parse(this.content))}</div> `;
   }
}
