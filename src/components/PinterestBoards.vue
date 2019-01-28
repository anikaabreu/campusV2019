<template>
<div>
  <h1>Welcome to your Dashboard</h1>
<p>
  Choose Users or Pins see your users with repin information.
  </p>
  <v-text class="text-xs-center">
    <div class="font-weight-bold "></div>
    <v-btn dark color="indigo" @click="show = !show">Updates

            </v-btn>
    <v-slide-y-transition>
            <v-card-text v-show="show">
              <p>Upcoming Features</p>
              Our next feature will be a campaign manager tool, to organize users and pins, followed by the ability to view users based on activity.
            </v-card-text>
          </v-slide-y-transition>

  </v-text>
   <v-spacer></v-spacer>
      <v-spacer></v-spacer>
<v-btn
to="/pinterest-boards/Pins" depressed dark color="cyan"
>Pins</v-btn>
<v-btn
to="/pinterest-boards/Users" depressed dark color="cyan"
>Users</v-btn>
<!-- <router-link to= tag="button">Pins</router-link>
<router-link to="/pinterest-boards/Users" tag="button">Users</router-link> -->

<router-view></router-view>
</div>
</template>
<script>
import { db } from './../firebase.js';
import { VCard, VCardText, VCardMedia } from "vuetify/lib";

export default {
   components: {
    VCard,
    VCardText,
    VCardMedia,
  },
 data () {
    return {
      loading: false,
      show: false
    }
  },
  firebase: {
    cat: db.ref('cats'),

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
