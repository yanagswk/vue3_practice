import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store/index";
// import './assets/styles/index.css'
import "./index.css";
import axios from "axios";
import VueAxios from "vue-axios";
// import AxiosPlugin from "./axios";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

// Bootstrap 5 + SB Admin
import "startbootstrap-sb-admin/src/scss/styles.scss";

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// アイコンをライブラリに追加して、DOM経由(class)で参照できるようにする。
// library.add(fas);
dom.watch();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store, key)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
// .use(AxiosPlugin)
