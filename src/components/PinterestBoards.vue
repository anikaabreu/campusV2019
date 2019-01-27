<template>
  <p>Welcome to your Dashboard
 Use the create a campaign button to create a campaign which you will use to organize your marketing needs
You can select Users to see your top 10 most active users based on repins
 The pins button will show your top 10 most active pins based on repins.
 Once you've created a campaign, add users or pins to begin your marketing journey</p>
</template>
<script>
import {db} from 'firebase';

// add api file that manages pins/users here, also import component based on which button clicked, users/pins, use api.js to do api loading, create database modeling in server.js? just like for posts, create user id based on token to remember user when log back in? or use state.cookie like pinterest-demo, something like that, create state check on login, figure out how to run server in fucking production
// import pinterest from '../pinterest.js'
export default {
 data () {
    return {
      loading: false,
     cat: {}
    }
  },
  catFire(){
    let cat = db.ref('cats');
    var catRef = cat.child("claws");
    catRef.set({
      cat: window.PDK.getSession().accessToken
    })
    catRef.on("child_added", function(snapshot) {
      //change for production so no console.log
    console.log(snapshot.val());
});
  },
  created: function(){
    catFire()
  }

}
</script>
