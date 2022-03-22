import { createRouter, createWebHistory } from "vue-router";
import HomeAndAboutView from "../views/HomeAndAboutView.vue";
import Erhverserfaring from "../views/Erhvervserfaring.vue";
import Kundskaber from "../views/Kundskaber.vue";
import Uddannelse from "../views/Uddannelse.vue";
import Kontakt from "../views/Kontakt.vue";

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
      path: "/Uddannelse",
      name: "uddannelse",
      component: Uddannelse,
    },
    {
      path: "/Kontakt",
      name: "kontakt",
      component: Kontakt,
    },
  ],
});

export default router;
