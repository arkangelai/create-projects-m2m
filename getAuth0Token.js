const config = require('./config')
const postSSLRequest = require('./utils/postpostSSLRequestRequest')

async function getAuth0Token() {
  return postSSLRequest({
      hostname: config.auth0.auth0Domain,
      path: '/oauth/token',
      body: {
          client_id: config.auth0.auth0ClientId,
          client_secret: config.auth0.auth0ClientSecret,
          audience: config.auth0.auth0Audience,
          grant_type: 'client_credentials'
      },
  })
}

module.exports = getAuth0Token