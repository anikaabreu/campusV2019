<template>

  <div id="app">
     <v-toolbar
     color="teal lighten-3"
     extended
     card
     justify-end>
      <v-toolbar-side-icon> <v-icon slot="extension" class="white--text">menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-items v-show="this.$store.state.login" class="hidden-sm-and-down white--text" slot="extension" >
        <v-btn flat large to="/pinterest-boards/Users" class="white--text text-xs-right">Users</v-btn>
        <v-btn to="/pinterest-boards/Pins" flat large  class="white--text text-xs-right">Pins</v-btn>
        <v-btn @click="drawer = !drawer" flat large  class="white--text text-xs-right">Tables</v-btn>
         <v-btn href="https://anikaabreu.com" flat large class="white--text text-xs-right">Portfolio</v-btn>

      </v-toolbar-items>

    </v-toolbar>

   <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
         <v-card>
          <v-toolbar color="teal" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title class="text-xs-center">Sorted Tables</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon></v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader>View Repins</v-subheader>
            <v-list-tile
            >
<v-btn flat normalto="/pinterest-boards/UserRepins" >Users</v-btn>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-list subheader>
            <v-subheader></v-subheader>
<v-list-tile
            >
<v-btn flat normalto="/pinterest-boards/UserRepins" >Pins</v-btn>
            </v-list-tile>
          </v-list>
        </v-card>

      </v-navigation-drawer>

    <main>

      <router-view></router-view>
    </main>
  </div>

</template>

<script>

  export default {
    name: 'app',
    mounted(){
       let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.pinterest.com/sdk/sdk.js')
    document.head.appendChild(recaptchaScript)

    },
    data () {
    return {
      drawer: false,
      show: false
    }
  }

  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Rajdhani', sans-serif!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
