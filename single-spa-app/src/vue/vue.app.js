import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import vuetify from './plugins/vuetify'
import Hello from './main.vue'

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        vuetify,
        el: '#vue',
        render: r => r(Hello)
    } 
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];