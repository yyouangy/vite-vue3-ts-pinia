<template>
    <div>
      <button @click="handleClick">显示/移除</button>
      <div v-if="show" ref="content">我是一个元素</div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  const show = ref(true)
  const content = ref()
  const handleClick = () => {
    show.value = !show.value
    console.log(show.value, content.value)//true null
  }
  </script>