<template>
  <div id="app">
    <nav class="navbar-brand">
      <router-link to="/trivia-app">Trivia App</router-link> |
      <router-link to="/chuck">Chuck</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
