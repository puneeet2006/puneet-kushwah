<template>
  <div>
    <div class="content-headers">
      Contact
    </div>
    <div class="row q-ma-sm justify-center">
      <q-card class="cursor-pointer q-pa-md q-ma-md q-pa-md shadow-15 mbb-30 col-md-4" v-for="contact in contacts" :key="contact.id" clickable v-ripple @click="contactAction(contact.id,contact.link)">
        <q-card-section class="row justify-center">
          <q-avatar color="pink" size="7em" text-color="white" :icon="contact.icon">
            <q-badge class="contact-badge" v-show="contact.contact_badge_show" color="primary" floating>Copied!</q-badge>
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="text-grey text-h6 text-center" style="word-wrap: break-word;">{{ contact.link }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default
{
  // name: 'ComponentName',
  data()
  {
    return {
      contacts: [
      {
        id: "mail",
        link: 'rj.puneet.t800@gmail.com',
        icon: 'fas fa-envelope-open-text',
        contact_badge_show: false,
      },
      {
        id: "linkedin",
        link: 'https://www.linkedin.com/in/puneet-kushwah/',
        icon: 'fab fa-linkedin',
        contact_badge_show: false,
      },
      {
        id: "stackoverflow",
        link: 'https://stackoverflow.com/users/2582225/puneet-kushwah',
        icon: 'fab fa-stack-overflow',
        contact_badge_show: false,
      },
      {
        id: "github",
        link: 'https://github.com/puneeet2006',
        icon: 'fab fa-github',
        contact_badge_show: false,
      },
      {
        id: "skype",
        link: 'puneeet20',
        icon: 'fab fa-skype',
        contact_badge_show: false,
      },
      {
        id: "line",
        link: 'puneeet20',
        icon: 'fab fa-line',
        contact_badge_show: false,
      }]
    }
  },
  methods:
  {
    contactAction(id, msg)
    {
      this.contacts.forEach(item => item.contact_badge_show = false);

      this.$copyText(msg);
      const indexOfBadge = this.contacts.findIndex(contact => contact.id === id);
      this.contacts[indexOfBadge].contact_badge_show = true;
    }
  }
}

</script>
