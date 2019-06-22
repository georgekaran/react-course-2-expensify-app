import { Service } from "./Service";
import BasicService from "./BasicService";

class UserService extends BasicService {
  constructor() {
    super()
  }

  static logout = async data => {
    await BasicService.get("api/logout")
  }

  static update = async (data) => {
    return await BasicService.post("user/update", data)
  }

  static updateImage = async (data) => {
    return await BasicService.post("user/update-image", data)
  }
}

export default UserService
