<script setup lang="ts">
import { getCurrentInstance, reactive, ref, } from 'vue'

defineProps<{ value: number }>()
console.log(getCurrentInstance());

const count = ref(0)
let data = reactive({
  name: 'ygy'
})
function changeData() {
  // data = { name: 'lp' }
  // data.name='lp'
  data = Object.assign(data, { name: 'lp' })
}
const emits = defineEmits(["input"]);
</script>

<template>
  <p>我是子组件: {{ value }}</p>
  <button @click="emits('input', value + 1)">value+1</button>


  <!-- <h1>{{ data.name }}</h1>
  <button type="button" @click="changeData">change</button> -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
