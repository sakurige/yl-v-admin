// 判断是不是外部图标
export const isExternal = (path: string) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};
// 获取本地资源
export const getAssetsURL = (assetsPath: string) => {
  // 相对路径, 当前路径的url
  return new URL(`../assets${assetsPath}`, import.meta.url).href;
};
