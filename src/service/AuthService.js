import Service from "./Service";
import BasicService from "./BasicService";

const prefixUrl = 'auth'

class AuthService extends BasicService {
  constructor() {
    super()
  }

  static login = async data => {
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
}

export default AuthService
