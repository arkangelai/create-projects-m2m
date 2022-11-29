const Request = require('../utils/Request')

async function updateProject({ body }) {
  const request = new Request()
  return request.patch({
    path: '/api/projects',
    body
  })
}

module.exports = updateProject
