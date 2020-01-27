<template>
  <q-card class="shadow-15">
    <q-card-section>
      <div class="text-grey text-h4">{{title}}</div>
      <div>
        <q-separator class="mtt-20 mbb-20" color="primary" />
      </div>
      <div class="row justify-around">
        <div class="" v-for="item in techItems">
          <div class="full-width row justify-center">
            <q-avatar size="7em" color="pink" text-color="white" :icon="item.icon">
            </q-avatar>
          </div>
          <div class="text-center text-grey text-h6 mtt-20 text-uppercase">{{item.title}}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default
{
  // name: 'ComponentName',
  props: ['title', 'techItems'],
  data()
  {
    return {}
  }
}

</script>
