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
import axios from 'axios';
import check from '../check.js'
console.log(check.key)

export default {
  name: 'hello',
  data () {
    return {
      accessToken: {},
      // accessCode : window.PDK.getSession().accessToken,
      cookie: true
    }
  },
  methods: {
  login(){
    PDK.login({
  scope: "read_public, write_public"
  }, )
let token1 = window.PDK.getSession().accessToken
  function test(){
//     https://api.pinterest.com/v1/oauth/token?
//     grant_type=authorization_code&
//     client_id=12345&
//     client_secret=6789abcd&
//     code=xyz1010
//     axios.post('https://api.pinterest.com/v1/oauth/token?', {
// 	username: 'api',
//         password: 'MY_PASSWORD',
//         grant_type: 'MY_GRANT_TYPE'
// },
    axios.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_codeclient_id=5012974284748908469&client_secret=' + check.key + '&code=' + token1)
      .then(response => {
        console.log(response.data)
        // this.accessToken = response.data
      })
      .catch(err => {
        console.log(err)
      })

    console.log(token1)
  // console.log(window.PDK.getSession().accessToken)
}
test();
   },
    initializeP() {

    },
    loginP(callback) {
      window.PDK.login({
          scope: 'read_public, write_public, read_relationships'
        }, callback);
    },
    logoutP(){
    },
    loggedInP() {
      window.PDK.getSession().accessToken
      console.log('latestVERSION')

    }

  }

}

</script>


