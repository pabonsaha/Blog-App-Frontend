import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: function () {
    return {
      user: null,
      token: "",
    };
  },

  actions: {
    setUser(payload) {
      this.user = payload.user;
      this.token = payload.token;
    },
    getUser() {
      return this.user;
    },
    getToken() {
      return this.token;
    },
  },
  persist: true,
});
