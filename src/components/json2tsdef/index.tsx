import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
// import style from './index.module.scss';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';

@Component
export default class Json2TsDef extends Vue {
  public render(): VNode {
    return (
      <span>你好，世界</span>
    );
  }
}
