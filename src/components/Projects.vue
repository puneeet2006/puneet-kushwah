<template>
  <div>
    <div class="content-headers">
      Projects
    </div>
    <div class="row q-ma-md justify-center">
      <q-card class="q-pa-md full-width shadow-15 row ">
        <div class="q-pa-md col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12 center-align" v-for="(item,index) in projectdata" :key="index">
          <Flipper width="100%" height="300px" :flipped="item.flipped" duration='1s'>
            <div slot="front">
              <q-card class="project-card">
                <img class="responsive project-img" :src="item.front.imgscr">
                <q-card-section>
                  <q-btn fab color="pink" @click="flipCard(item.id)" icon="fas fa-ellipsis-v" class="absolute project-fab-btn" />
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
              <q-card class="project-card row">
                <q-card-section class="row full-width justify-between">
                  <div class="text-h5 text-primary ">Accomplishments</div>
                  <div class="cursor-pointer" @click="flipCard(item.id)">
                    <q-icon size="2em" color="pink" name="fas fa-arrow-circle-left" />
                  </div>
                </q-card-section>
                <div class="full-width">
                  <ul v-for="data in item.back.tech">
                    <li class="text-grey">{{data}}</li>
                  </ul>
                </div>
                <q-separator dark />
                <q-card-actions class="full-width self-end justify-end">
                  <q-btn fab color="primary" size="sm" icon="fas fa-external-link-alt" @click="gotToExternal(item.back.to)" />
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
              name:'JT Consulting Thailand',
              desc:'Leading recruitment firm in Bangkok'
            },
            back: {
              tech:[
              'Build with Quasar Framework',
              'Front end Vue JS, SASS',
              'Backend Firebase',
              'Multi-lingual'

              ],
              to:"https://jtconsultings.com/"
            }
        },
      {
        id:"proj2",
        flipped:false,
            front: {
              imgscr:'/statics/vsr.png',
              name:'VSR Rolling Mills India',
              desc:'Rolling mills product info'

            },
            back: { tech:[
              'Build with Quasar Framework',
              'Front end Vue JS, SASS',
              'Backend Firebase',
              'Admin panel for product management'

              ],
              to:"https://vsrrollingmills.com/"
            }
      },
            {
        id:"proj3",
        flipped:false,
            front: {
              imgscr:'/statics/carohit.png',
              name:'CA Rohit Jaiswal',
              desc:'Application manages client Tax documents'

            },
            back: { tech:[
              'Developed using Laravel PHP Framework',
              'Front end using Bootstrap, SASS',
              'Backend MySQL',
              'Admin panel for client management'
              ],
              to:'https://carohitjaiswal.com/'}
      },
      {
        id:"proj4",
        flipped:false,
            front: {
              imgscr:'/statics/smiledental.png',
              name:'Smile Dental Clinic',
              desc:'Dentist profile Application'
            },
            back: { tech:[
              'Developed using HTML, CSS, jQuery',
              'Front end using mdBootstrap',
              
              ],
              to:''}
      },
      {
        id:"proj5",
        flipped:false,
            front: {
              imgscr:'/statics/dentalwarehouse.png',
              name:'Dental Warehouse Australia',
              desc:'Dental equipement ecommerce site operated in Australia'

            },
            back: {
              tech:[
              'Build with Quasar Framework',
              'Front end Vue JS, SASS',
              'Backend Firebase',
              'Multi-lingual'

              ],
              to:"https://jtconsultings.com/"
            }
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
    flipCard(id)
    {
      const indexOfProduct = this.projectdata.findIndex(product=> product.id === id);
      this.projectdata[indexOfProduct].flipped = !this.projectdata[indexOfProduct].flipped;
    },
    gotToExternal(url)
    {
      window.open(url, '_blank');
    }
  }

}

</script>
