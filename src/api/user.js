import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
  return request({
    url: '/loginUser',
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function getInfo(/*token*/) {
  return request({
    url: '/getInfo',
    method: 'get',
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// 获取登陆验证码
export function createImageCode() {
  return request({
    url: '/createImageCode',
    method: 'get',
    responseType: 'arraybuffer'  //返回二进制流数据
  })
}
