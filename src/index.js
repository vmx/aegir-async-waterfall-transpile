'use strict'

const waterfall = require('async/waterfall')

console.log('script is running')

waterfall([
  async () => {
   return 'Hello World!'
  },
], function (err, result) {
  console.log('result:', result)
});

