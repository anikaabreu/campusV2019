<template v-for="(pin, value) in pins" :key="value">

    <v-app id="inspire">
<br>
          <v-toolbar color="indigo" dark> <v-toolbar-title class="white--text text--darken-4">Users</v-toolbar-title></v-toolbar>

   <v-subheader>Sort your users by choosing Repins to show most active users.</v-subheader>

      <div v-bind:result="pins"></div>
    <v-data-table
      :headers="top"
      :items="pins"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.counts.pins }}</td>
        <td class="text-xs-left">{{props.item.first_name}}</td>
        <td class="text-xs-left">{{ props.item.url }}</td>

      </template>
    </v-data-table>
  </v-app>
</template>
<script>
import { db } from "./../firebase.js";
import { VCard, VCardText, VCardMedia } from "vuetify/lib";

export default {
  components: {
    VCard,
    VCardText,
    VCardMedia,

  },
  firebase: {
    pins: db.ref("users/userArr")
  },
  props: ["result"],
  data() {
    return {
      loading: false,
      pins: {},
        top: [
        {
          text: 'Repins',
          align: 'center',
          sortable: true,
          value: 'counts.pins'
        },
        { text: 'Username', value: 'first_name' },
        { text: 'Url', value: 'url' },

      ]
    };
  },
  created: function(){
    this.$store.state.login = true;
  }
};
</script>
