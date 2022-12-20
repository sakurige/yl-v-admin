import request from "../request";

import type { UserInfo } from "../types/login";

export default (data: UserInfo) => {
  return request.post({
    url: "/sys/login",
    data
  });
};
