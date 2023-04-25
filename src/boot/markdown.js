// import Vue from "vue";
import QMarkdown from "@quasar/quasar-ui-qmarkdown";
// import "@quasar/quasar-ui-qmarkdown/dist/index.css";

// Vue.createApp(Plugin);

import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.component("QMarkdown", QMarkdown.QMarkdown);
});
