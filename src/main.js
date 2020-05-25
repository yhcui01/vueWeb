import Vue from 'vue';

import App from './App.vue'
import router from './router/index.js'
import ApiObj from '@/ajax';
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';
Vue.use(Antd);
Vue.config.productionTip = false
Vue.prototype.ApiObj = ApiObj;
// Vue.component(Button.name, Button)
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
