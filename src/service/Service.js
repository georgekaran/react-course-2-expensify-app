import axios from 'axios'

class Service {
  static async post(url, data) {
    return await axios.post(url, data).then(resp => {
      console.log(resp)
      return resp.data
    }).catch(err => {
      console.log(err.response.data)
      return err;
    })
  }

  static async get(url, data) {
    return await axios.get(url, data).then(resp => {
      console.log(resp)
      return resp.data
    }).catch(err => {
      console.log(err.response.data)
      return err;
    })
  }

  static async put(url, data) {
    return await axios.put(url, data).then(resp => {
      console.log(resp)
      return resp.data
    }).catch(err => {
      console.log(err.response.data)
      return err;
    })
  }

  static async delete(url, data) {
    return await axios.delete(url, data).then(resp => {
      console.log(resp)
      return resp.data
    }).catch(err => {
      console.log(err.response.data)
      return err;
    })
  }
}

export { Service, axios };
