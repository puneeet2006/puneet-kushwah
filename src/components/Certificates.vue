<template>
  <div>
    <div class="content-headers">
      Certificates
    </div>
    <div class="row q-ma-xl justify-center">
      <q-card class="q-pa-md full-width shadow-15">
        <q-card-section>
          <div class="row">
            <div class="col-md-6 col-xs-6 col-sm-6 col-xl-6 col-lg-6" v-for="item in certificates">
              <div class="text-center text-h5 text-grey">{{item.title}}</div>
              <img v-img:spimg :src="item.imgpath" class="q-pa-md responsive" :alt="item.title">
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
const certificates = [
{
  title: 'Oracle PL/SQL Developer Certified Associate (OCA)',
  imgpath: '/statics/oracleoca.png'
},
{
  title: 'Microsoft Certified Professional (MCP)',
  imgpath: '/statics/msprofessional.png'
},
{
  title: 'Microsoft Certified Associate - Web Dev Fundamentals',
  imgpath: '/statics/msweb.png'
},
{
  title: 'Microsoft Certified Associate -DB Admin Fundamentals',
  imgpath: '/statics/msdb.png'
}, ]
export default
{
  // name: 'ComponentName',
  data()
  {
    return {
      certificates
    }
  }
}

</script>
