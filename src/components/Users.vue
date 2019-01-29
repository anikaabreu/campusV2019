<template>
<div>
    <v-app id="inspire">
      <v-layout justify-center>
        <v-flex xs16 sm8>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Users</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex v-for="(user, value) in users" v-bind="{ [`xs${2}`]: true }" :key="value">
                  <v-card raised>
                    <v-img :src="user.image['60x60'].url" height="auto">
                      <v-container fill-height fluid pa-4>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox></v-flex>
                        </v-layout>

                      </v-container>
                    </v-img>
                    <v-card-title primary-title class="text-xs-center">
                      <div class="text-xs-center">
                        <v-card-text class="font-weight-bold text-xs-center">{{user.first_name}}</v-card-text>
                        <div class="text-xs-center">Repins: {{ user.counts.pins}}</div>

                        <div>
                          <v-btn v-bind:href="user.url" outline color="purple">Profile</v-btn>
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
      newUser: {
        name: '',
        repins: '',
        url: ''
      },
       cats:[],
  currentSort:'name',
  currentSortDir:'asc'
    }
  },
  firebase: {
    users: db.ref('users/userArr')
  },
  addUser() {
        this.$firebaseRefs.items.push({
            name: this.newUser.name,
            repins: this.newUser.repins,
            url: this.newUser.url
        })
        this.newUser.name = '';
        this.newUser.repins = '';
        this.newUser.url = '';

      },
  created: function(){
this.$store.state.login = true;
},

}
</script>
