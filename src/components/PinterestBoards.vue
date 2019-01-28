<template>
<div class="hero">
<br>
<br>
  <h1 class="display-2">Welcome to your Dashboard</h1>
<br>
<br>
<p class="headline font-weight-light">
Start with viewing pins and users with repins and links to their origin. Choose Tables for another way to view your data. 
<br><br>

  </p>
  <v-text class="text-xs-center">
    <div class="font-weight-bold "></div>
   
   <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
<v-btn
to="/pinterest-boards/Pins" depressed dark color="cyan"
>Pins</v-btn>
<v-btn
to="/pinterest-boards/Users" depressed dark color="cyan"
>Users</v-btn>
  <v-spacer></v-spacer>
      <v-spacer></v-spacer>
       <v-btn dark color="indigo" @click="show = !show">Updates

            </v-btn>
    <v-slide-y-transition>
            <v-card-text v-show="show">
              <p>Upcoming Features</p>
              Our next feature will be a campaign manager tool, to organize users and pins in one location.
            </v-card-text>
          </v-slide-y-transition>
              <v-btn dark color="indigo" @click="table = !table">Tables

            </v-btn>
    <v-slide-y-transition>
            <v-card-text v-show="table">
Here, you can choose to see your data displayed as a table with sorting capabilities.          
<v-btn
to="/pinterest-boards/PinsRepins" depressed dark color="cyan"
>Pins</v-btn>
<v-btn
to="/pinterest-boards/UserRepins" depressed dark color="cyan"
>Users</v-btn>  </v-card-text>
          </v-slide-y-transition>

  </v-text>
<br><br>
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
      show: false,
      table: false
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
