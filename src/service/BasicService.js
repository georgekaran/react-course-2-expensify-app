import { Service } from './Service';

const baseUrl = process.env.API

class BasicService {

  constructor() {
  }

  static post = async(url, data) => {
    return await Service.post(baseUrl+url, data)
  }

  static get = async(url, data) => {
    return await Service.get(baseUrl+url, data)
  }

  static put = async(id, data) => {
    return await Service.put(`${this.url}/${id}`, data)
  }

  delete = async(id) => {
    return await Service.delete(`${this.url}/${id}`)
  }

  getAll = async() => {
    return await Service.getJSON(this.url)
  }

  getOne = async(id) => {
    return await Service.getJSON(`${this.url}/${id}`)
  }
}

export default BasicService;