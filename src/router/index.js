import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.base_url),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "editJob",
      component: EditJobView,
    },
    {
      path: "/jobs/add/",
      name: "addJob",
      component: AddJobView,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

export default router;
