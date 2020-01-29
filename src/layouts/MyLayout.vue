<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="tab-items">
      <q-card square flat id="header-card-item">
        <q-card-section>
          <div class="text-primary text-center text-h4 q-pa-md">
            Puneet <br>
            Kushwah
          </div>
          <div class="text-body text-center text-grey">Full-Stack Developer</div>
        </q-card-section>
      </q-card>
      <q-tabs align="center">
        <q-tab v-scroll-to="'#'+item.id+'_view'" v-for="(item,index) in navbaritems" :key="index" :icon="item.icon" :name="item.label" :label="item.label" :class="[view_port_id == item.id ? 'q-tab--active' : '']" />
      </q-tabs>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="220" content-class="bg-grey-2">
      <q-card square flat>
        <q-card-section>
          <div class="text-primary text-center text-h4 q-pa-md">
            Puneet <br>
            Kushwah
          </div>
          <div class="text-body text-center text-grey">Full-Stack Developer</div>
        </q-card-section>
      </q-card>
      <q-list>
        <div v-scroll-to="'#'+item.id+'_view'" v-for=" (item,index) in navbaritems" :id="item.id" :key="index" :class="'tab-color-hover-'+item.color">
          <q-item clickable tag="a" :class="[view_port_id == item.id ? 'tab-color-active-'+item.color : '']">
            <div>
              <q-item-section avatar>
                <q-icon :name="item.icon" :color="item.color" />
              </q-item-section>
            </div>
            <q-item-section>
              <q-item-label>{{item.label}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import
{
  mapGetters,
}
from 'vuex'
export default
{
  name: 'MyLayout',

  data()
  {
    return {
      leftDrawerOpen: false,
      navbaritems: [
      {
        label: 'About',
        to: '#about',
        icon: 'fas fa-user-circle',
        id: 'about',
        color: 'indigo',
        class: ''
      },
      {
        label: 'Experience',
        to: '/',
        icon: 'fas fa-chart-line',
        id: 'experience',
        color: 'blue-grey',
        class: ''
      },
      {
        label: 'Projects',
        to: '/',
        icon: 'fas fa-toolbox',
        id: 'projects',
        color: 'cyan',
        class: ''
      },
      {
        label: 'Skills',
        to: '/',
        icon: 'fas fa-laptop-code',
        id: 'skills',
        color: 'deep-purple',
        class: ''
      },
      {
        label: 'Education',
        to: '/',
        icon: 'fas fa-graduation-cap',
        id: 'education',
        color: 'accent',
        class: ''
      },
      {
        label: 'Certificates',
        to: '/',
        icon: 'fas fa-star',
        id: 'certificates',
        color: 'pink',
        class: ''
      },
      {
        label: 'Contact',
        to: '/',
        icon: 'fas fa-id-card',
        id: 'contact',
        color: 'deep-orange',
        class: ''
      },
      {
        label: 'Resume',
        to: '/',
        icon: 'fas fa-file-contract',
        id: 'resume',
        color: 'purple',
        class: ''
      }, ]
    }
  },
  computed:
  {
    ...mapGetters(
    {
      view_port_id: "global/getCurrentViewPort"
    })
  }
}

</script>
