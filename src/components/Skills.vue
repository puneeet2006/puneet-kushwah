<template>
  <div>
    <div class="content-headers">
      Skills
    </div>
    <div class="row q-ma-md justify-center">
      <div class="full-width">
        <SkillTemplate title="Front-End" :techItems="frontend" />
        <SkillTemplate title="JavaScript" :techItems="javascript" class="mtt-20" />
        <SkillTemplate title="Back-End" :techItems="backend" class="mtt-20" />
        <SkillTemplate title="Other" :techItems="others" class="mtt-20" />
      </div>
    </div>
  </div>
</template>
<script>
import SkillTemplate from './SkillTemplate.vue'

const frontend = [
{
  icon: 'fab fa-html5',
  title: 'HTML'
},
{
  icon: 'fab fa-css3-alt',
  title: 'CSS'
},
{
  icon: 'fab fa-sass',
  title: 'SASS'
},
{
  icon: 'fab fa-bootstrap',
  title: 'BOOTSTRAP'
},
{
  icon: 'fab fa-mdb',
  title: 'Material Bootstrap'
}, ]

const javascript = [
{
  icon: 'fab fa-js-square',
  title: 'JavaScript'
},
{
  icon: 'fab fa-angular',
  title: 'Angular'
},
{
  icon: 'fab fa-vuejs',
  title: 'Vue'
},
{
  icon: 'fab fa-react',
  title: 'React'
},
{
  icon: 'fab fa-node',
  title: 'Node'
}]

const backend = [
{
  icon: 'fab fa-php',
  title: 'php'
},
{
  icon: 'fab fa-laravel',
  title: 'Laravel'
},
{
  icon: 'fab fa-android',
  title: 'Android'
},
{
  icon: 'fas fa-code',
  title: 'Microsoft MVC'
},
{
  icon: 'fas fa-code',
  title: 'Oracle PL/SQL'
}, ]

const others = [
{
  icon: 'fas fa-database',
  title: 'Oracle DB'
},
{
  icon: 'fas fa-database',
  title: 'MS SERVER'
},
{
  icon: 'fas fa-database',
  title: 'MYSQL DB'
},
{
  icon: 'fas fa-table',
  title: 'Google Firebase'
},
{
  icon: 'fas fa-table',
  title: 'Mongo DB'
},
{
  icon: 'fas fa-code',
  title: 'GraphQL'
},
{
  icon: 'fab fa-git-alt',
  title: 'Git'
}, ]
export default
{
  // name: 'ComponentName',
  data()
  {
    return {
      frontend,
      javascript,
      backend,
      others
    }
  },
  components:
  {
    SkillTemplate
  }
}

</script>
