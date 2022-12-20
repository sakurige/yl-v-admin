<script lang="ts" setup>
  import { ref, watchEffect } from "vue";
  import type { FormRules } from "element-plus";
  import SvgIcon from "@/components/svg-icon/index.vue";
  import { getAssetsURL, validatorPassword, validatorUsername } from "@/utils";
  import useLoginStore from "@/stores/modules/login";

  import storage from "@/utils/storage";
  // 密码输入框 相关
  const iptType = ref("password");
  const iconPath = ref("/svg/eye.svg");
  const showText = () => {
    iptType.value = iptType.value === "text" ? "password" : "text";
    iconPath.value =
      iconPath.value === "/svg/eye-open.svg"
        ? "/svg/eye.svg"
        : "/svg/eye-open.svg";
  };
  // 表单验证相关
  const rules = ref<FormRules>({
    username: [
      {
        required: true,
        validator: validatorUsername(),
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        validator: validatorPassword(),
        trigger: "blur",
      },
    ],
  });
  const userInfo = ref({
    username: "super-admin",
    password: "123456",
  });
  //  请求相关
  const loginStore = useLoginStore();

  const loginHandler = () => {
    loginStore.fetchLoginToken(userInfo.value);
  };
  // 存储相关
  watchEffect(() => {
    storage.setItem("token", loginStore.token);
    const v = storage.getItem("token");
    console.log(typeof v);
  });
</script>
<template>
  <div class="login-box">
    <el-form :model="userInfo" :rules="rules" class="login-form">
      <div class="form-title">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span>
          <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
        </span>
        <el-input v-model="userInfo.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <svg-icon :icon="getAssetsURL('/svg/password.svg')" />
        <el-input
          v-model="userInfo.password"
          :type="iptType"
          placeholder="密码"
        />
        <span class="eye-icon" @click="showText">
          <svg-icon :icon="getAssetsURL(iconPath)"></svg-icon>
        </span>
      </el-form-item>
      <el-button @click="loginHandler">登录</el-button>
    </el-form>
  </div>
</template>
<style lang="less" scoped>
  @import "@/assets/style/common.less";

  .login-box {
    width: 100vw;
    height: 100vh;
    background-image: @theme-gradient;

    .login-form {
      position: relative;
      width: 520px;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;

      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0);
        background-color: #b2fefa40;
        border-radius: 5px;
        color: #fff;
        padding-left: 12px;

        :deep(.el-input) {
          display: inline-block;
          height: 47px;
          width: 85%;
          border: none;
          outline: none;

          .is-focus {
            box-shadow: none;
          }

          .el-input__wrapper {
            padding: 0 0 0 24px;
            background-color: transparent;
          }

          .el-input__wrapper,
          .el-input__wrapper:hover {
            box-shadow: none;
          }

          input {
            height: 47px;
            background: transparent;
            border: none;
            border-radius: 0;
            padding: 12px 5px 12px 15px;
            color: yellow;
            caret-color: white;
          }

          input::placeholder {
            color: #fff;
          }
        }

        .eye-icon {
          padding-left: 20px;
        }
      }

      .title {
        font-size: 26px;
        color: #fff;
        text-align: center;
        margin: 0 0 32px 0;
      }

      .el-button {
        width: 100%;
        height: 47px;
        background-color: #2db6d4;
        color: white;
      }
    }
  }
</style>
