const {fork} = require('child_process');


//Starting User Gateway
fork('./index.js', [], {
  cwd: './user_gateway'
});

//
// //Starting Browsing Gateway
fork('./index.js', [], {
  cwd: './browsing_gateway'
});


//Starting Browsing Gateway
require('./storefront');
