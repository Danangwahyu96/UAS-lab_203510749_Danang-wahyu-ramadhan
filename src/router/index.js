import Vue from 'vue';
import VueRouter from 'vue-router';
import WeatherWidget from '../components/WeatherWidget.vue';
import Task1 from '../components/Task1.vue';
import Task2 from '../components/Task2.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: WeatherWidget
  },
  {
    path: '/task1',
    name: 'Task1',
    component: Task1
  },
  {
    path: '/task2',
    name: 'Task2',
    component: Task2
  },
  // Tambahkan rute untuk halaman lainnya
];

const router = new VueRouter({
  routes
});

export default router;
