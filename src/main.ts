import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//导入mock
import './apis/mock'
//axios文件

// 创建vue实例
const app = createApp(App)

type Test = { a: string; b: number; c: boolean };

type ValueOf<T> = T[keyof T];

type TestValues = ValueOf<Test>; // string | number | boolean


const a:TestValues={
    D:1,C:2,G:3
}
console.log(a);





// 挂载pinia
app.use(store)
app.use(router)
app.use(ElementPlus)
// 挂载实例
app.mount('#app');
