<template>
  <div>
    <div class="content-headers">
      Projects
    </div>
    <div class="row q-ma-xl justify-center">
      <q-card class="q-pa-md full-width shadow-15 row ">
        <div class="q-pa-md col-md-6 col-sm-4 col-xs-12" v-for="(item,index) in projectdata" :key="index">
          <Flipper width="100%" height="450px" :flipped="item.flipped" @click="onClick(item.id)" duration='1s'>
            <div slot="front">
              <q-card class="project-card">
                <q-card-section>
                  <img class="responsive" src="https://cdn.quasar.dev/img/mountains.jpg">
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section>
                  {{projectdata.front}}
                </q-card-section>
                <q-separator dark />
                <q-card-actions>
                  <q-btn flat>Action 1</q-btn>
                  <q-btn flat>Action 2</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div slot="back">
              <q-card class="project-card">
                <q-card-section>
                  <div class="text-h6">back</div>
                  <div class="text-subtitle2">by John Doe</div>
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
      flipped: false,
		projectdata: 
		[
			{
				id:"proj1",
				flipped:false,
		        front: {},
		        back: {}
		    },
			{
				id:"proj2",
				flipped:false,
		        front: {},
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
