<style scoped>
.com {
  padding: 0px 20px;
}
.coderow {
  margin-top: 4px;
}
.controw {
  margin-top: 10px;
}
.inline {
  display: flex;
  align-items: center;
}
.inline > span {
  white-space: nowrap;
  margin-right: 5px;
}
.copyicon {
  margin-left: 4px;
  cursor: pointer;
}
</style>

<template>
  <div class="com">
    <a-row :gutter="10">
      <a-col :span="12">
        <div>
          <span>JSON数据</span>
          <a-icon @click="handleCopyJSON" class="copyicon" type="copy" />
        </div>
      </a-col>
      <a-col :span="12">
        <div>
          <span>TypeScript定义</span>
          <a-icon @click="handleCopyTs" class="copyicon" type="copy" />
        </div>
      </a-col>
    </a-row>
    <a-row class="coderow" :gutter="10">
      <a-col :span="12">
        <Code
          :value="jsonCode"
          @change="handleCodeChange"
        />
      </a-col>
      <a-col :span="12">
        <Code
          :value="tsCode"
        />
      </a-col>
    </a-row>
    <a-row class="controw" :gutter="10">
      <a-col :span="6">
        <div class="inline">
          <span>数据名称: </span>
          <a-input
            placeholder="请输入JSON数据名称(如myclass)"
            v-model="desc"
            allowClear
            @change="handleDescChange"
          />
        </div>
      </a-col>
      <a-col :span="6">
        <a-button
          type="primary"
          :loading="loading"
          @click="handleGenClick">
          生成TypeScript定义
        </a-button>
      </a-col>
      <a-col :span="6">
        <div class="inline">
          <span>类型名称: </span>
          <a-input placeholder="类型名称" v-model="tsName" />
          <a-icon @click="handleCopyTsName" class="copyicon" type="copy" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Shuji from '@wrule/shuji';
import Code from '@/components/code/index.vue';

@Component({
  components: {
    Code,
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

  realJsonCode = this.jsonCode;

  tsName = '';

  tsCode = '';

  loading = false;

  shuji = new Shuji();

  genCode(desc: string, json: string) {
    this.loading = true;
    this.$nextTick(() => {
      try {
        const struct = this.shuji.Infer(desc, JSON.parse(json));
        this.tsName = struct.TsName;
        this.tsCode = struct.TsTestCode;
      } catch(e) {
        console.log('转换出错');
      }
      this.loading = false;
    });
  }

  copyText(text: string, show: boolean) {
    this.$copyText(text);
    if (show) {
      (this as any).$notification['success']({
        message: '系统提示',
        description: '代码已经复制到剪切板',
      });
    }
  }

  handleCodeChange(nv: string) {
    this.realJsonCode = nv;
    this.genCode(this.desc, this.realJsonCode);
  }

  handleDescChange() {
    this.genCode(this.desc, this.realJsonCode);
  }

  handleGenClick() {
    this.genCode(this.desc, this.realJsonCode);
    this.copyText(this.tsCode, false);
    (this as any).$notification['success']({
      message: '系统提示',
      description: '代码已生成成功且复制到剪切板',
    });
  }

  handleCopyJSON() {
    console.log(this.realJsonCode);
    this.copyText(this.realJsonCode, true);
  }

  handleCopyTs() {
    console.log(this.tsCode);
    this.copyText(this.tsCode, true);
  }

  handleCopyTsName() {
    console.log(this.tsName);
    this.copyText(this.tsName, true);
  }

  mounted() {
    this.genCode(this.desc, this.realJsonCode);
  }
}
</script>
