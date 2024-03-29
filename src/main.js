import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "../node_modules/nprogress/nprogress.css";
import "@/fontAwesomeIcon.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Ads from "vue-google-adsense";
import VueMeta from "vue-meta";

Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense); //디스플레이 광고
Vue.use(Ads.InArticleAdsense); //콘텐츠 내 자동 삽입 광고
Vue.use(Ads.InFeedAdsense); //인피드 광고
Vue.use(VueMeta);

library.add(fas, far, fab);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
