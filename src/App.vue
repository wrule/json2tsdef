<template>
  <div id="app">
    <div class="name">
      <h1 class="title">JSON转TypeScript类型定义</h1>
      <a-tooltip placement="right">
        <span slot="title">动态整合类型变化,合并类型等等</span>
        <a target="_blank" href="https://github.com/wrule/shuji">
          <a-icon class="githubicon" type="github" />
          <span>Shuji的更多功能</span>
        </a>
      </a-tooltip>
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

.githubicon {
  margin-right: 5px;
}
</style>
