<template>
    <div>
        {{ _userStore.name }}
    </div>
</template>

<script setup lang="ts">
import { userStore } from "@/store/user";
const _userStore = userStore();
_userStore.updateName('里斯')
</script>

<style scoped></style>