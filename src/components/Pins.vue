<template>
  <div>
    <v-app id="inspire">
      <v-layout justify-center>
        <v-flex xs16 sm8>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Pins</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex v-for="(pin, value) in pins" v-bind="{ [`xs${6}`]: true }" :key="value">
                  <v-card raised>
                    <v-img :src="pin.image.original.url" height="200px">
                      <v-container fill-height fluid pa-4>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox></v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                    <v-card-title primary-title class="text-xs-center">
                      <div class="text-xs-center">
                        <v-card-text class="headline font-weight-bold text-xs-center">{{pin.note}}</v-card-text>
                        <div class="headline text-xs-center">Repins: {{ pin.counts.saves}}</div>

                        <div>
                          <v-btn v-bind:href="pin.board.url" outline color="purple">Board</v-btn>
                        </div>
                        <div>
                          <v-btn v-bind:href="pin.original_link" outline color="purple">Original Link</v-btn>
                        </div>
                        <div>
                          <v-btn v-bind:href="pin.url" outline color="purple">Pinterest Link</v-btn>
                        </div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon>

                      </v-btn>
                      <v-btn icon>

                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>
<style lang="css" scoped>
</style>


<script>
import { db } from "./../firebase.js";
import { VCard, VCardText, VCardMedia } from "vuetify/lib";
import Vue2Filters from 'vue2-filters'
import PinsRepins from './PinsRepins.vue';

export default {
  components: {
    VCard,
    VCardText,
    VCardMedia,
    appUserDetail: PinsRepins
  },
  data() {
    return {
      repins: '',
      board:'',
      userName: '',
      userUrl:'',
      loading: false,
      pins: {}
    };
  },
  firebase: {
    pins: db.ref("pins/dataArr")
  },
//  mixins: [Vue2Filters.mixin],
  methods: {
    sortPins() {
      console.log(this.pins);
    }
  },
  created: function() {
    console.log(this.$firebaseRefs.pins);
    // this.$firebaseRefs.pins
  }
};
</script>
