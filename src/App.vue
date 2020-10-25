<template>
  <div id="app">
    <div class="name">
      <h1 class="title">JSON转TypeScript类型定义</h1>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.name {
  padding: 20px;
}
.title {
  margin-bottom: 0px;
}
</style>
