/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// import MarkdownRenderer from "./components/MarkdownRenderer";

// customElements.define('markdown-renderer', MarkdownRenderer);

// import './bootstrap';
import HelloWorld from "./components/HelloWorld.ce.vue";
import { defineCustomElement } from 'vue'

customElements.define('hello-world', defineCustomElement(HelloWorld))

// import { createApp } from 'vue';


// const app = createApp({
//    components: {
//       HelloWorld
//    }
// })

// app.mount('#app')