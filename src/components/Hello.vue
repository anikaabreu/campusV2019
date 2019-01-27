<template>
  <div class="hero">
    <div>
      <h1 class="display-3">Welcome to a Pinterest Example Application</h1>
      <p class="lead">Please sign in below by clicking the Pinterest logo</p>
      <button @click="login()">A</button>
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
    }
  },

};
</script>


