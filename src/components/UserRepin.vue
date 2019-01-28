<template v-for="(pin, value) in pins" :key="value">

    <v-app id="inspire">
          <v-toolbar color="indigo" dark>
            <v-toolbar-title class="text-xs-center"></v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
             <v-spacer></v-spacer>
      <h1 class="headline font-weight-light">Sort your users by choosing Repins to show most active users.</h1>
         <v-spacer></v-spacer>
            <v-spacer></v-spacer>
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
import Vue2Filters from 'vue2-filters'


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
  }
};
</script>