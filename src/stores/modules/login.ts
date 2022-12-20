import { defineStore } from "pinia";
import { login } from "@/service";
import type { UserInfo } from "@/service/types/login";
import storage from "@/utils/storage";

const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
  }),
  actions: {
    async fetchLoginToken(userInfo: UserInfo) {
      const res: any = await login(userInfo);
      this.token = storage.getItem("token") as string;
      storage.setItem("token", res.data.data.token);
    },
  },
});
export default useLoginStore;
