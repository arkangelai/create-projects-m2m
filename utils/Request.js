const axios = require('axios')
const config = require('../config')

class Request {
  constructor () {
    this.http = axios.create({
      baseURL: config.api.host,
      headers: {'Authorization': `Bearer ` + config.api.jwt}
    });
  }

  async create ({ path, body }) {
    const res = await this.http.post(
      path,
      body,
      { headers: { ...this.http.headers, 'Content-Type': 'application/json' } }
    )
    return res.data
  }

  async patch ({ path, body }) {
    const res = await this.http.patch(
      path,
      body,
      { headers: { ...this.http.headers, 'Content-Type': 'application/json' } }
    )
    return res.data
  }

  async createFormData ({ path, formData }) {
    const res = await this.http.post(
      path,
      formData,
      { ...this.http.headers, headers: formData.getHeaders() }
    )
    return res.data
  }
}

module.exports = Request
