<style scoped>
  .code {
    width: 640px;
    height: 480px;
  }
</style>

<template>
  <div class="com">
    <div class="code"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Json2TsDef from '@/components/json2tsdef';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';

@Component({
  components: {
    HelloWorld,
    Json2TsDef,
  },
  mounted() {
    const myCodeMirror = CodeMirror(this.$el.querySelector('.code') as any, {
      value: `
export class Student {
  private name: string;
  private age: number;
}
`.trim(),
      mode:  'text/typescript'
    });
    console.log(myCodeMirror);
  },
})
export default class Home extends Vue {}
</script>
