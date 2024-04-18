<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import usePinia from './components/UsePinia.vue';
import VueUse from "@/pages/VueUse.vue";
import  Nexttick  from "@/pages/Nexttick.vue";
import Table from "@/pages/Table.vue"
import { ref } from "vue"
const lazyValue = ref("100")
// 点击事件
function clickEvent(num:number) {
  console.log('触发输出:' + num);
}
let num = ref(0)
</script>

<template>
  <!-- <RouterView />
  <div class="out-box" @click.self="clickEvent(2)">
    触发输出2
    <div class="in-box" @click="clickEvent(1)">触发输出1</div>
  </div> -->
  <!-- <input type="text" v-model.number="lazyValue">
  <div>{{ lazyValue }}</div> -->
  <!-- <VueUse></VueUse> -->
  <!-- <keep-alive> -->
  <!-- <HelloWorld v-model="num"></HelloWorld> -->
  <!-- v-model="num" 等价于 :value="num" @input="val => num = val" -->
  <!-- <HelloWorld :value="num" @input="val => num = val"></HelloWorld> -->
  <!-- 等价于 -->
  <!-- <HelloWorld :value="num" @input="num = $event"></HelloWorld> -->
  <!-- </keep-alive> -->

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <usePinia></usePinia> -->

<!-- 封装useTable hooks -->
<!-- <Table></Table> -->
<!-- nexttick使用 -->
<Nexttick></Nexttick>
</template>

<style scoped>
.out-box {
  height: 600px;
  width: 600px;
  background-color: #f01e1e;
}

.in-box {
  height: 200px;
  width: 200px;
  background-color: #7d7272;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
