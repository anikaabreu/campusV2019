<template>
  <div class="hero">
    <div>
      <h1 class="display-3">Welcome to a Pinterest Example Application</h1>
      <p class="lead">Please sign in below by clicking the Pinterest logo</p>
      <button @click="login()">A</button>
         <button @click="loggedinP()">B</button>
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
    font-size: 1.5rem;
  }
</style>

<script>
import { init, login, logout, loggedIn} from '../pinterest.js'
window.PDK.init({
  appId: 5011742023928009316,
  cookie: true })
export default {
  name: 'hello',
  data () {
    return {
      window: document.window,
      cookie: true
    }
  },
  methods: {
  login(callback){ 
    window.PDK.login({
          scope: 'read_public, write_public'
        }, callback);
  },
    initializeP() {
      init()
    },
    loginP() {
      window.PDK.login({
          scope: 'read_public, write_public'
        }, callback);
    },
    logoutP(){
    },
    loggedInP() {
          return !!window.PDK.getSession();
    }

  }
  
}
</script>


