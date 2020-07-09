import Vue from 'vue';

import App from './App.vue';
import router from './router/index.js';
import ApiObj from '@/ajax';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import VueSocketIO from 'vue-socket.io';

Vue.use(Antd);
Vue.use(
	new VueSocketIO({
		debug: true,
		// 服务器端地址
		connection: 'http://localhost:4000',
		vuex: {}
	})
);
Vue.config.productionTip = false;
Vue.prototype.ApiObj = ApiObj;
// Vue.component(Button.name, Button)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
