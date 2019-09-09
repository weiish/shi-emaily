var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'aajowefjeawoifnvczx' }, function(err, tunnel) {
  console.log(`LT running at ${tunnel.url}`)
});