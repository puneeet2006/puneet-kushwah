<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="tab-items">
      <q-card square flat>
        <q-card-section>
          <div class="text-primary text-center text-h4 q-pa-md">
            Puneet <br>
            Kushwah
          </div>
          <div class="text-body text-center text-grey">Full-Stack Developer</div>
        </q-card-section>
      </q-card>
      <q-tabs align="center">
        <q-tab v-for="(item,index) in navbaritems" :key="index" :icon="item.icon" :name="item.label" :label="item.label" />
      </q-tabs>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="250" content-class="bg-grey-2">
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
        <q-item :id="item.label" v-for="(item,index) in navbaritems" :key="index" clickable tag="a" :href="item.to" class="tab-color-hover-">
          <q-item-section avatar>
            <q-icon :name="item.icon" :color="item.color" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
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
        id: '',
        color: 'indigo',
        class: ''
      },
      {
        label: 'Experience',
        to: '/',
        icon: 'fas fa-chart-line',
        id: '',
        color: 'blue-grey',
        class: ''
      },
      {
        label: 'Projects',
        to: '/',
        icon: 'fas fa-toolbox',
        id: '',
        color: 'cyan',
        class: ''
      },
      {
        label: 'Skills',
        to: '/',
        icon: 'fas fa-laptop-code',
        id: '',
        color: 'deep-purple',
        class: ''
      },
      {
        label: 'Education',
        to: '/',
        icon: 'fas fa-graduation-cap',
        id: '',
        color: 'accent',
        class: ''
      },
      {
        label: 'Certificates',
        to: '/',
        icon: 'fas fa-certificate',
        id: '',
        color: 'lime',
        class: ''
      },
      {
        label: 'Contact',
        to: '/',
        icon: 'fas fa-id-card',
        id: '',
        color: 'deep-orange',
        class: ''
      },
      {
        label: 'Resume',
        to: '/',
        icon: 'fas fa-file-contract',
        id: '',
        color: 'purple',
        class: ''
      }, ]
    }
  }
}

</script>
