<style scoped>
.code {
  border-top: solid 1px #f7f7f7;
  border-bottom: solid 1px #f7f7f7;
}
</style>

<template>
  <div class="code">
    <textarea v-model="code" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';

@Component
export default class Code extends Vue {
  @Prop({ default: '' }) private readonly value!: string;

  codeMirror!: CodeMirror.EditorFromTextArea;

  code = '';

  updateCode(nv: string) {
    this.code = nv;
    this.codeMirror?.setValue(this.code);
  }

  @Watch('value', { immediate: true })
  handleValueChange(nv: string) {
    this.updateCode(nv);
  }

  @Emit('input')
  emitInput(nv: string) {
    return nv;
  }

  @Emit('change')
  emitChange(nv: string) {
    return nv;
  }

  initCom() {
    const textarea = this.$el.querySelector('textarea');
    if (textarea) {
      this.codeMirror = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        matchBrackets: true,
        mode: 'text/typescript'
      } as any);
      this.codeMirror.on('change', (codeMirror) => {
        const nv = codeMirror.getValue();
        // this.emitInput(nv)
        this.emitChange(nv);
      });
    }
  }

  mounted() {
    this.initCom();
  }
}
</script>
