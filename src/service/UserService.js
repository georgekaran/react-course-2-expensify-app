import Service from "./Service";
import BasicService from "./BasicService";

class UserService extends BasicService {
  constructor() {
    super("auth")
  }

  static login = async data => {
    return await Service.postJSON("/api/register", data)
  }

  static logout = async data => {
    await Service.get("/api/logout")
  }
}

export default UserService
