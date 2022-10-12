import { createApp } from 'vue';
import { defineCustomElement } from 'vue';
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.ce.vue";
const HelloWorldComponent = defineCustomElement(HelloWorld);

createApp(App).mount('#app')
customElements.define('hello-world', HelloWorldComponent);
export {
    HelloWorldComponent
}
