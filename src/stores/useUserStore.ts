import { defineStore } from 'pinia'
import User from "../interfaces/User.ts";
import UserService from "../services/UserService.ts";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userList: [] as User[],
        }
    },
    actions : {
        async getUsers(){
            this.userList = await UserService.getUsers();
        }
    }
})
