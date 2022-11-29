const Request = require('../utils/Request')

async function createProject({ body }) {
  const request = new Request()
  return request.create({
    path: '/api/projects',
    body
  })
}

module.exports = createProject