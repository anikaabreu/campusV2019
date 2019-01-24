<template>
  <div class="hero">
    <div>
      <h1 class="display-3">Welcome to a Pinterest Example Application</h1>
      <p class="lead">Please sign in below by clicking the Pinterest logo</p>
      <button @click="login()">A</button>
         <button @click="loggedInP()">B</button>
    </div>
  </div>
</template>

<style>
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.6rem;
  }
</style>


<script>
// import { login, logout, loggedIn} from '../pinterest.js'
import jQuery from 'jquery'


console.log('LASTESTVERSIONFIRE')

export default {
  name: 'hello',
  data () {
    return {
      window1: {
        function(){
         return Window
        }
      
      },
      cookie: true
    }
  },
  methods: {
  
  login(callback){
    PDK.login({
  scope: "read_public, write_public"
  }, callback);
   },
    initializeP() {
     
    },
    loginP(callback) {
      window.PDK.login({
          scope: 'read_public, write_public'
        }, callback);
    },
    logoutP(){
    },
    loggedInP() {
      console.log('latestVERSION')
       console.log(window.PDK, window.PDK.getSession())
    }

  }

}

</script>


