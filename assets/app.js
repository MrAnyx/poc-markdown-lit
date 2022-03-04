// import './styles/app.css';

/**
 * Custom elements
 */
// import MarkdownRenderer from "./components/MarkdownRenderer";
// customElements.define('markdown-renderer', MarkdownRenderer);

// import './bootstrap';
// import HelloWorld from "";

import { defineCustomElement } from "vue";
import { HelloWorldCe } from "@needlify/components";

customElements.define("hello-world", defineCustomElement(HelloWorldCe));

/**
 * Traditional way
 */
// import { createApp } from 'vue';

// const app = createApp({
//    components: {
//       HelloWorld
//    }
// })

// app.mount('#app')
