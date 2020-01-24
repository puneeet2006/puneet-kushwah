<template>
  <q-page>
    <div id="intro-wrapper">
      <div id="intro">
        <div class="q-pa-md text-h3 text-white intro-text">I want to <span class="bg-indigo">make things &nbsp;</span><br> that <span class="intro-bottom">make a difference.</span></div>
      </div>
    </div>
    <About id="about" />
    <Experience />
  </q-page>
</template>
<script>
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'

export default
{
  name: 'PageIndex',
  components:
  {
    About,
    Experience,
  }
}

</script>
