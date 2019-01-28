<template v-for="(pin, value) in pins" :key="value">

    <v-app id="inspire">
          <v-toolbar color="indigo" dark>
            <v-toolbar-title class="text-xs-center"></v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
             <v-spacer></v-spacer>
      <h1 class="headline font-weight-light">Sort your pins by choosing Repins to show most popular pins.</h1>
         <v-spacer></v-spacer>
            <v-spacer></v-spacer>
      <div v-bind:result="pins"></div>
    <v-data-table
      :headers="top"
      :items="pins"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.counts.saves }}</td>
        <td class="text-xs-left">{{props.item.board.url }}</td>
        <td class="text-xs-left">{{ props.item.url }}</td>
        <td class="text-xs-left">{{ props.item.original_link }}</td>
   
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
    pins: db.ref("pins/dataArr")
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
          value: 'counts.saves'
        },
        { text: 'Board', value: 'board.url' },
        { text: 'Original Link', value: 'original_link' },
        { text: 'Url', value: 'item.url' },
       
      ]
    };
  },
};
</script>
