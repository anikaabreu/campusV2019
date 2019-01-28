<template>
<h1>Users </h1>
</template>
<script>
import { db } from './../firebase.js';

export default {
 data () {
    return {
      loading: false,
     cat: {}
    }
  },
  firebase: {
    cat: db.ref('cats')
  },
  methods: {
    user(){
      this.$router.push('pinterest-boards/Users')
    },
    pin(){
      this.$router.push('pinterest-boards/Pins')
    }
  },
  created: function(){
    this.$firebaseRefs.cat.set({
      // cat: window.PDK.getSession().accessToken
    })
this.$firebaseRefs.cat.on("child_added", function(snapshot) {

});
}
}
</script>
