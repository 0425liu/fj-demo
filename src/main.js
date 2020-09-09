import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/base.scss";
import {
  Radio,
  Button,
  Select,
  Option,
  DatePicker,
  ButtonGroup
} from "element-ui";

import echarts from "echarts";
Vue.component(Radio.name, Radio);
Vue.component(Button.name, Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(ButtonGroup);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
