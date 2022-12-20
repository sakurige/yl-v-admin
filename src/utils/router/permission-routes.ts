import router from "@/router";
import storage from "@/utils/storage";

const whiteList = ["/login", "/about"];
router.beforeEach((to, from, next) => {
  // 从localstorage中获取token
  if (storage.getItem("token")) {
    // 如果token存在, 除了登录界面都可以进
    if (to.path === "/login") {
      next("/");
    }
  } else {
    // 没有token的处理
    if (whiteList.indexOf(to.path) === -1) {
      // 如果请求页面不在在白名单中,就跳到login界面
      next("/login");
    } else {
      // 如果在白名单里就随便进
      next();
    }
  }
});
