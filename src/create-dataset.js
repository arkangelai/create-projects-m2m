
const Request = require('../utils/Request')

async function createDataset({ formData }) {
  const request = new Request()
  return request.createFormData({
    path: '/api/datasets/load-dataset',
    formData
  })
}

module.exports = createDataset