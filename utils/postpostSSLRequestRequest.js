const https = require('https');

function postSSLRequest({ hostname, path, body, token }) {
  const options = {
    hostname,
    path,
    method: 'post',
    port: 443,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    options.headers['Authorization'] = `${token.token_type} ${token.access_token}`
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let rawData = '';

      res.on('data', chunk => {
        rawData += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });

    req.on('error', err => {
      console.log(err)
      reject(new Error(err));
    });

    req.write(JSON.stringify(body));
    req.end();
  });
}

module.exports = postSSLRequest