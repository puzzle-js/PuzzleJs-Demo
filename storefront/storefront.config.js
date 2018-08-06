const fs = require('fs');
const path = require('path');

module.exports = {
  gateways: [
    {
      name: 'browsing-gateway',
      url: 'http://localhost:4445'
    },
    {
      name: 'user-gateway',
      url: 'http://localhost:4446'
    }
  ],
  pages: [
    {
      html: fs.readFileSync(path.join(__dirname, './src/pages/home/home.html'), 'utf8'),
      url: "/"
    }
  ],
  port: 4444,
  dependencies: []
};
