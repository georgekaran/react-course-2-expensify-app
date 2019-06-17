import Service from "./Service";
import BasicService from "./BasicService";

const prefixUrl = 'auth'

class AuthService extends BasicService {
  constructor() {
    super()
  }

  static login = async data => {
    console.log(data)
    return await BasicService.post(`${prefixUrl}/authenticate`, data)
  }

  static register = async data => {
    console.log(data)
    return await BasicService.post(`${prefixUrl}/register`, data) 
    //Service.postJSON("/register", data)
  }

  static logout = async data => {
    await Service.get("/logout")
  }

  static isAuthenticated = async () => {
    return await BasicService.get(`${prefixUrl}/isAuthenticated`, {}) 
  }

  static isTokenValid = async (token) => {
    return await BasicService.post(`${prefixUrl}/is_token_valid`, token)
  }
}

var getCookies = function(){
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i=0; i<pairs.length; i++){
    var pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair[1]);
  }
  return cookies;
}

export default AuthService
