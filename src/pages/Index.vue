<template>
  <q-page>
    <div id="intro-wrapper">
      <div id="intro">
        <div class="q-pa-md text-h3 text-white intro-text">I want to <span class="bg-indigo">make things &nbsp;</span><br> that <span class="intro-bottom">make a difference.</span></div>
      </div>
    </div>
    <About id="about_view" v-view.in="viewHandler" />
    <Experience id="experience_view" v-view.in="viewHandler" />
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
  },
  methods:
  {
    viewHandler: function(e)
    {
      if (e.percentTop === 1)
      {
        this.$store.commit('global/SET_CURRENT_VIEW_PORT', null);
      }
      else
      {
        let viewId = e.target.element.id;

        viewId = viewId.replace('_view', "");

        this.$store.commit('global/SET_CURRENT_VIEW_PORT', viewId);
      }

    }
  }

}

</script>
