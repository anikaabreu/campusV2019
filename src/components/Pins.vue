<template>
<div>
  <h1>Pins</h1>

    </div>
</template>
<style lang="css" scoped>
.tweet {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
}

 .box {
  margin-bottom: 0;
  border-radius: 0;
}

.content small {
  color: #00d1b2;
}

img {
  border-radius: 30px;
}

 .level-item {
  padding-left: 10px;
  color: #00d1b2;
}

 input:focus {
  border-color: #00d1b2;
}

.likes {
  padding: 0 7.5px;
}

 input {
  font-weight: bold;
}

.tweets-move {
  transition: transform 1s;
}
</style>


<script>
import { db } from './../firebase.js';

export default {
 data () {
    return {
      loading: false,
     pins: {}
    }
  },
  firebase: {
    user: db.ref('pins')
  },
  methods: {

  },
  created: function(){
    this.$firebaseRefs.cat.set({
      // cat: window.PDK.getSession().accessToken
    })
this.$firebaseRefs.cat.on("child_added", function(snapshot) {

});
}
}
</script>
