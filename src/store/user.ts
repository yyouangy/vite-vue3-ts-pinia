import { defineStore } from "pinia"

export const userStore = defineStore({
    id: 'user',
    state: () => {
        return { name: '袁国耀' }
    },
    actions: {
        updateName(name: string) {
            this.name = name
        }

    }



})