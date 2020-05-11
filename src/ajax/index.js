import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import loginApi from './loginApi';

Vue.use(VueAxios,axios);

const ApiObj = {
    loginApi
}

export default ApiObj