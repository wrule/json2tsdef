<style scoped>
</style>

<template>
  <Json2Ts />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Json2Ts from '@/components/json2ts/index.vue';

@Component({
  components: {
    Json2Ts,
  },
})
export default class Home extends Vue { }
</script>
