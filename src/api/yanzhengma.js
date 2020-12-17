import request from "../util/request";

export function user() {
  return request({
    url: "/captcha/sent",
    method: "get",
  });
}
