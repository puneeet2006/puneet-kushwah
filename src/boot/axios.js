import Vue from 'vue'
import axios from 'axios'
import checkView from 'vue-check-view'
import VueScrollTo from 'vue-scrollto'
import VueResponsiveImage from 'vue-responsive-image'

Vue.use(VueScrollTo,
{
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: -5
})

Vue.use(checkView)

//Vue.component('vue-responsive-image', VueResponsiveImage)


Vue.prototype.$axios = axios
