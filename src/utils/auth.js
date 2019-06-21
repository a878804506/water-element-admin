import Cookies from 'js-cookie'

const TokenKey = 'Uesr-Token'
let TokenValue = null

export function getToken() {
  return TokenValue
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  TokenValue = token
  // return Cookies.set(TokenKey, token)
}

export function removeToken() {
  TokenValue = null
  // return Cookies.remove(TokenKey)
}
