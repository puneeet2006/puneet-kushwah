<template>
  <q-page>
    <div id="intro-wrapper">
      <div id="intro">
        <div class="q-pa-md text-h3 text-white intro-text">I want to <span class="bg-indigo">make things &nbsp;</span><br> that <span class="intro-bottom">make a difference.</span></div>
      </div>
    </div>
    <div class="">
      <About id="about_view" v-view="viewHandler" />
      <Experience id="experience_view" v-view.in="viewHandler" />
      <Projects id="projects_view" v-view.in="viewHandler" />
      <Skills id="skills_view" v-view.in="viewHandler" />
      <Education id="education_view" v-view.in="viewHandler" />
      <Certificates id="certificates_view" v-view.in="viewHandler" />
      <Contact id="contact_view" v-view.in="viewHandler" />
      <Resume id="resume_view" v-view.in="viewHandler" />
    </div>
  </q-page>
</template>
<script>
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import Education from '../components/Education.vue'
import Certificates from '../components/Certificates.vue'
import Contact from '../components/Contact.vue'
import Resume from '../components/Resume.vue'

export default
{
  name: 'PageIndex',
  components:
  {
    About,
    Experience,
    Projects,
    Skills,
    Education,
    Certificates,
    Contact,
    Resume
  },
  mounted()
  {
    this.$store.commit('global/SET_CURRENT_VIEW_PORT', "");
  },
  methods:
  {
    viewHandler: function(e)
    {
      var topCardElement = document.getElementById("header-card-item");
      if (e.target.element.id == 'about_view')
      {

        topCardElement.style.display = "block";
      }
      else
      {
        topCardElement.style.display = "none";
      }

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
