require('dotenv').config();

const config = {
  auth0: {
    auth0ClientId: process.env.AUHT0_CLIENT_ID,
    auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
    auth0Domain: process.env.AUTH0_DOMAIN,
    auth0Audience: process.env.AUTH0_AUDIENCE
  },
  api: {
    host: process.env.API_HOST,
    jwt: process.env.JWT
  }
}

module.exports = config