import Vue from 'vue'
import axios from 'axios'
import checkView from 'vue-check-view'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'
import VueImg from 'v-img';

const vueImgConfig = {
  // Use `alt` attribute as gallery slide title
  altAsTitle: true,
  // Display 'download' button near 'close' that opens source image in new tab
  sourceButton: false,
  // Event listener to open gallery will be applied to <img> element
  openOn: 'click',
  // Show thumbnails for all groups with more than 1 image
  thumbnails: true,
}

Vue.use(VueImg, vueImgConfig);

Vue.use(VueClipboard)

Vue.use(VueScrollTo,
{
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: -380
})

Vue.use(checkView)

//Vue.component('vue-responsive-image', VueResponsiveImage)


Vue.prototype.$axios = axios
