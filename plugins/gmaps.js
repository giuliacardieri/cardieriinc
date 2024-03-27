import { defineNuxtPlugin } from "#app";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyACQ9FJn05n9-juXnwQRiwftHkrdwGSVvA",
      libraries: "places",
    },
  });
});
