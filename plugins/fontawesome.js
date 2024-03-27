import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalendarAlt,
  faBuilding,
  faCar,
  faClose,
  faBed,
  faRulerVertical,
  faTimes,
  faChevronDown,
  faChevronUp,
  faBars,
  faGamepad,
  faUtensils,
  faSwimmingPool,
  faFutbol,
  faDumbbell,
  faUsers,
  faLaptop,
  faBaby,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalendarAlt,
  faBuilding,
  faCar,
  faClose,
  faBed,
  faRulerVertical,
  faTimes,
  faChevronDown,
  faChevronUp,
  faBars,
  faGamepad,
  faUtensils,
  faSwimmingPool,
  faFutbol,
  faDumbbell,
  faUsers,
  faLaptop,
  faBaby,
  faWhatsapp,
  faFacebookF,
  faYoutube,
  faInstagram
);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
