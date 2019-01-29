<template>

<div class="p5">
      <h1 class="lrgHeaderHello ">Welcome to a Pinterest API Example Application</h1>
      <p class="lead">
This application will allow you to see your pins and users with repin information.
        </p>
      <v-btn v-on:click.native="login()" :loginT="true" depressed dark color="cyan">Sign In</v-btn>

</div>




</template>

<style scoped>
.hero {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
 .lead {
  font-weight: 200;
  font-size: 1.6rem;
  color: black;
}

.p5 {
  padding: 5%;
  text-align: center;
}
</style>


<script>

export default {
  name: "hello",
  data() {
    return {
      cat: {},
      cookie: true
    };
  },
  methods: {
    login() {
      PDK.login({
        scope: "read_public, write_public, read_relationships"
      });
      this.$store.state.login = true;
      this.$router.push('pinterest-boards')
    }
  },
  created: function(){
      // console.log(this.$store.state.login)
    }

};
</script>


