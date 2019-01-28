<template>

</template>

<script>
import { db } from './../firebase.js';
import { VCard, VCardText, VCardMedia } from "vuetify/lib";

export default {
  components: {
    VCard,
    VCardText,
    VCardMedia
  },
 data () {
    return {
      loading: false,
     users: {},
     pins: {}
    }
  },
  firebase: {
    users: db.ref('campaign/users'),
    pins: db.ref('campaign/pins')
  },
  methods: {

  },
  created: function(){

}
}
</script>
