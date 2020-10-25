<style scoped>
.com {
  padding: 0px 20px;
}
.coderow {
  margin-top: 10px;
}
</style>

<template>
  <div class="com">
    <a-row :gutter="10">
      <a-col :span="12">
        <!-- <a-textarea
          v-model="jsonCode"
          :rows="12"
          placeholder="请在此输入JSON数据"
        /> -->
        <codemirror
          v-model="jsonCode"
          :options="jsonOptions"
        />
      </a-col>
      <a-col :span="12">
        <!-- <a-textarea
          v-model="tsCode"
          :rows="12"
          placeholder="类型定义"
        /> -->
        <codemirror
          v-model="tsCode"
          :options="tsOptions"
        />
      </a-col>
    </a-row>
    <a-row class="coderow" :gutter="10">
      <a-col :span="6">
        <a-input placeholder="请输入数据名称(如myclass)" v-model="desc" />
      </a-col>
      <a-col :span="6">
        <a-button
          type="primary"
          @click="handleGenClick">
          生成TypeScript定义
        </a-button>
      </a-col>
      <a-col :span="6">
        <a-input placeholder="类型名称" v-model="tsName" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Shuji from '@wrule/shuji';
import { codemirror } from 'vue-codemirror';
// import 'codemirror/mode/javascript/javascript.js';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/eclipse.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';

@Component({
  components: {
    codemirror,
  },
})
export default class Home extends Vue {
  desc = 'myclass';
  jsonCode = `
{
  "name": "jimao",
  "sex": true,
  "age": 99,
  "address": "浙江省杭州市",
  "tags": ["程序员", "跑步", "看书"],
  "tuple": [
    ["m1", 1],
    ["m2", 2],
    ["m3", 3]
  ],
  "meta": {
    "color": "red",
    "lang": ["js", "ts", "c/c++", "go", "c#"]
  },
  "unknow": []
}
`.trim();
  tsName = '';
  tsCode = '';

  handleGenClick() {
    const shuji = new Shuji();
    const struct = shuji.Infer(this.desc, JSON.parse(this.jsonCode));
    this.tsName = struct.TsName;
    this.tsCode = struct.TsCode;
  }

  jsonOptions = {
    tabSize: 4,
    mode: 'text/javascript',
    theme: 'eclipse',
    lineNumbers: true,
    line: true,
  };

  tsOptions = {
    tabSize: 4,
    theme: 'eclipse',
    line: true,
    lineNumbers: true,
    matchBrackets: true,
    mode: 'text/typescript',
  };
}
</script>
