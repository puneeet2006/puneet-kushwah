import Vue from 'vue'
import axios from 'axios'
import checkView from 'vue-check-view'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo,
{
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: -5
})

Vue.use(checkView)

Vue.prototype.$axios = axios
