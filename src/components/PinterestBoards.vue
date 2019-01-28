<template>
<div>
  <h1>Welcome to your Dashboard</h1>
<p>Choose Users see your top 10 most active users based on repins.
<br>
    Or see your top 10 most active pins based on repins with the Pins button.
  </p>

<router-link to="/pinterest-boards/Pins" tag="button">Pins</router-link>
<router-link to="/pinterest-boards/Users" tag="button">Users</router-link>

<router-view></router-view>
</div>
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
       cat: window.PDK.getSession().accessToken
    })
this.$firebaseRefs.cat.on("child_added", function(snapshot) {

});
}
}
</script>
