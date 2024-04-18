<template>
    <h1> 测试 vueUse 的鼠标坐标
        <span>cs</span>
    </h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <img :src="real_url" alt="" :height="real_height" :width="real_width">
</template>
    
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMouse } from '@vueuse/core'
import request from "@/utils/axios"
export default defineComponent({
    name: 'VueUse',
    setup() {
        const { x, y } = useMouse()
        let real_height = ref(0);
        let real_width = ref(0);
        let real_url = ref('')

        const requestRes = async () => {
            let { data } = await request({
                url: '/images/search',
                method: 'get',
                params: { size: 'full' }
            });

            let { height, width, url } = data[0]
            real_height.value = height; real_width.value = width; real_url.value = url
        }
        requestRes();

        return {
            x, y, real_height, real_width, real_url
        }
    }
});
</script>

<style lang="scss">
h1 {
    color: red;

    span {
        color: green;

    }
}
</style>