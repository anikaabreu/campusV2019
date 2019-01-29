<template>
  <div >
    <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      max-width="800"
      v-show="['PinterestBoards'].includes($route.name)">
      <v-card-title>
        <span class="title font-weight-light"> Welcome to your Dashboard</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
       Choose Users or Pins to get started and look at your data unsorted. Tables will provide a sorted view.
      </v-card-text>

    </v-card>
    <router-view></router-view>

  </div>
</template>
<style>
.hero {

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero .lead {
  font-weight: 200;
  font-size: 1.6rem;
}

.subTxtPint{
font-size: 24px!important;
    line-height: 32px!important;
    font-weight:200!important;
}
</style>

<script>
import { db } from "./../firebase.js";
import { VCard, VCardText, VCardMedia } from "vuetify/lib";

export default {
  components: {
    VCard,
    VCardText,
    VCardMedia
  },
  data() {
    return {
      loading: false,
      show: false,
      table: false
    };
  },
  firebase: {
    cat: db.ref("cats")
  },
  methods: {
    user() {
      this.$router.push("pinterest-boards/Users");
    },
    pin() {
      this.$router.push("pinterest-boards/Pins");
    }
  },
  created: function() {
    this.$firebaseRefs.cat.set({
      cat: window.PDK.getSession().accessToken
    });
   this.$store.state.login = true;
  }
};
</script>
