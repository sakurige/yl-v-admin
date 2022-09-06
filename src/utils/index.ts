// 判断是不是外部图标
export const isExternal = (path: string) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};
// 获取本地资源
export const getAssetsURL = (assetsPath: string) => {
  // 相对路径, 当前路径的url
  return new URL(`../assets${assetsPath}`, import.meta.url).href;
};
export const validatorPassword = () => {
  return (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("密码不能为空"));
    } else if (value.length < 5) {
      callback(new Error("密码不能小于5位"));
    } else {
      callback();
    }
  };
};
export const validatorUsername = () => {
  return (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("用户名不能为空"));
    }
    callback();
  };
};
