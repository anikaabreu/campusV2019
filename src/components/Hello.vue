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

export default {
  name: 'hello',
  data () {
    return {
      accessToken: {},
      cookie: true
    }
  },
  methods: {
  login(){
    PDK.login({
  scope: "read_public, write_public, read_relationships"
  }, )
let token1 = window.PDK.getSession().accessToken
  function test(){
    this.accessToken = token1
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
       //     https://api.pinterest.com/v1/oauth/token?
// //     grant_type=authorization_code&
// //     client_id=12345&
// //     client_secret=6789abcd&
// //     code=xyz1010
// //     axios.post('https://api.pinterest.com/v1/oauth/token?', {
// // 	grant_type: 'authorization_code',
// //        client_id: '5012974284748908469',
// //         client_secret: check.key,
// //  'https://api.pinterest.com/v1/oauth/tokengrant_type=authorization_codeclient_id=5012974284748908469&client_secret=' + check.key + '&code=' + token1)
//   //       axios.post('/user', {
//   //   firstName: 'Fred',
//   //   lastName: 'Flintstone'
//   // })
//   // .then(function (response) {
//   //   console.log(response);np
//   // })
//   // .catch(function (error) {
//   //   console.log(error);
//   // });var request = require('request');
//     axios.post(
//       'https://api.pinterest.com/v1/oauth/token?', {
// 	    grant_type: 'authorization_code',
//       client_id: '5012974284748908469',
//       client_secret: check.key,
//       code: token1
// })
//   .then(response => {
//         console.log(response.data)
//         // this.accessToken = response.data
//       })
//       .catch(err => {
//         console.log(err)
//       })


//   // console.log(window.PDK.getSession().accessToken)
      window.PDK.getSession().accessToken
      console.log('latestVERSION')

    }

  }

}

</script>


