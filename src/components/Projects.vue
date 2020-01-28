<template>
  <div>
    <div class="content-headers">
      Projects
    </div>
    <div class="row q-ma-xl justify-center">
      <q-card class="q-pa-md full-width shadow-15 row ">
        <div class="q-pa-md col-lg-4 col-xl-4 col-md-6 col-sm-4 col-xs-12 center-align" v-for="(item,index) in projectdata" :key="index">
          <Flipper width="100%" height="300px" :flipped="item.flipped" duration='1s'>
            <div slot="front">
              <q-card class="project-card">
                <img class="responsive project-img" :src="item.front.imgscr">
                <q-card-section>
                  <q-btn fab color="pink" @click="onClick(item.id)" icon="fas fa-ellipsis-v" class="absolute project-fab-btn" />
                  <div class="row no-wrap items-center">
                    <div class="col text-h6 ">
                      <div class="text-primary">{{item.front.name}}</div>
                      <div class="text-subtitle1 text-grey">{{item.front.desc}}</div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div slot="back">
              <q-card class="project-card">
                <q-card-section>
                  <div class="full-width">
                    <div class="text-h5 text-primary ">Tech Used</div>
                    <div class="text-subtitle2 row justify-end">by John Doe</div>
                  </div>
                </q-card-section>
                <q-card-section>
                  asdsadas
                </q-card-section>
                <q-separator dark />
                <q-card-actions>
                  <q-btn flat>Action 1</q-btn>
                  <q-btn flat>Action 2</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </Flipper>
        </div>
      </q-card>
    </div>
  </div>
</template>
<style src="vue-flipper/dist/vue-flipper.css" />
<script>
import Flipper from 'vue-flipper';
export default
{
  // name: 'ComponentName',
  data()
  {
    return {
    projectdata: 
    [
      {
        id:"proj1",
        flipped:false,
            front: {
              imgscr:'/statics/jtconsulting.png',
              name:'JT Consulting Bangkok',
              desc:'Leading recruitment firm in Bangkok'
            },
            back: {}
        },
      {
        id:"proj2",
        flipped:false,
            front: {
              imgscr:'/statics/dentalwarehouse.png',
              name:'Dental Warehouse Australia',
              desc:'Dental equipement ecommerce site operated in Australia'

            },
            back: {}
      },
            {
        id:"proj3",
        flipped:false,
            front: {
              imgscr:'/statics/dentalwarehouse.png',
              name:'Dental Warehouse Australia',
              desc:'Dental equipement ecommerce site operated in Australia'

            },
            back: {}
      },
      {
        id:"proj4",
        flipped:false,
            front: {
              imgscr:'/statics/dentalwarehouse.png',
              name:'Dental Warehouse Australia',
              desc:'Dental equipement ecommerce site operated in Australia'

            },
            back: {}
      },
      {
        id:"proj5",
        flipped:false,
            front: {
              imgscr:'/statics/dentalwarehouse.png',
              name:'Dental Warehouse Australia',
              desc:'Dental equipement ecommerce site operated in Australia'

            },
            back: {}
      }
    ]
      }
  },
  components:
  {
    Flipper
  },
  methods:
  {
    onClick(id)
    {
      const indexOfProduct = this.projectdata.findIndex(product=> product.id === id);
      this.projectdata[indexOfProduct].flipped = !this.projectdata[indexOfProduct].flipped;
    }
  }

}

</script>
