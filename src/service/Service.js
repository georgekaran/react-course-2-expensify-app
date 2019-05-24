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



}

export default Service;
