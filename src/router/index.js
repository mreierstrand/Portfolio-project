import { createRouter, createWebHistory } from "vue-router";
import HomeAndAboutView from "../views/HomeAndAboutView.vue";
import Erhverserfaring from "../views/Erhvervserfaring.vue";
import Kundskaber from "../views/Kundskaber.vue";
import Projekter from "../views/Projekter.vue";
import Uddannelse from "../views/Uddannelse.vue";
import Kontakt from "../views/Kontakt.vue";
import Emilie from "../views/Emilie.vue"
import Thomas from "../views/Thomas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeAndAboutView,
    },
    {
      path: "/erhvervserfaring",
      name: "erhvervserfaring",
      component: Erhverserfaring,
    },
    {
      path: "/Kundskaber",
      name: "kundskaber",
      component: Kundskaber,
    },
    {
      path: "/Projekter",
      name: "projekter",
      component: Projekter,
    },
    {
      path: "/Uddannelse",
      name: "uddannelse",
      component: Uddannelse,
    },
    {
      path: "/Kontakt",
      name: "kontakt",
      component: Kontakt,
    },
    {
      path: "/Emilie",
      name: "emilie",
      component: Emilie,
    },
    {
      path: "/Thomas",
      name: "thomas",
      component: Thomas,
    },
  ],
});

export default router;
