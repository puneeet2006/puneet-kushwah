<template>
  <div>
    <div class="content-headers">
      Resume
    </div>
    <div class="row q-ma-xl justify-center">
      <q-card class="q-pa-md full-width shadow-15 text-h1">
        <div class="text-center text-h4 text-grey">
          Download Resume
        </div>
        <div class="row q-ma-sm justify-center">
          <q-card class="q-pa-md q-ma-md q-pa-md shadow-15 mbb-30 col-md-4">
            <q-card-section class="row justify-center">
              <q-avatar color="pink" size="1em" text-color="white" icon="fas fa-file-pdf">
              </q-avatar>
            </q-card-section>
            <q-card-section class="row justify-center">
              <q-btn color="primary" :loading="loading" icon-right="fas fa-download" label="Download PDF" @click="downloadFile('pdf')" />
            </q-card-section>
          </q-card>
          <q-card class="q-pa-md q-ma-md q-pa-md shadow-15 mbb-30 col-md-4">
            <q-card-section class="row justify-center">
              <q-avatar color="pink" size="1em" text-color="white" icon="fas fa-file-word">
              </q-avatar>
            </q-card-section>
            <q-card-section class="row justify-center">
              <q-btn color="primary" :loading="loading" icon-right="fas fa-download" label="Download Word" @click="downloadFile('word')" />
            </q-card-section>
          </q-card>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
import
{
  firebaseStorage,
  firebaseFileStorage

}
from 'boot/firebase'
import Downloader from 'js-file-downloader';
export default
{
  // name: 'ComponentName',
  data()
  {
    return {
      loading: false,
    }
  },
  methods:
  {
    downloadFile(type)
    {
      this.loading = true;
      let refDir;
      if (type == 'word')
      {
        refDir = 'cv/PuneetKushwahResume.docx';
      }
      else
      {
        refDir = 'cv/PuneetKushwahResume.pdf';
      }

      let docRef = firebaseFileStorage.ref().child(refDir);

      //console.log(docRef.getDownloadURL())

      docRef.getDownloadURL().then(function(url)
      {
        new Downloader(
        {
          url: url
        })

      }).catch(function(error)
      {
        console.log(error)

      });
      this.loading = false;
    }

  }
}

</script>
