<template>
  <div class="hero">
    <div>
      <v-slide-y-transition>
      <h1 class="display-3">Welcome to a Pinterest API Example Application</h1>
      </v-slide-y-transition>
      <v-slide-y-transition>
      <p class="lead">
<span>This application will allow you to see your pins and users with repin information.</span>
        </p>
        </v-slide-y-transition>
      <v-btn v-on:click.native="login()" depressed dark color="cyan">Sign In</v-btn>

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
      this.$router.push('pinterest-boards')
    }
  },

};
</script>


