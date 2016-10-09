'use strict';

const fs = require('fs');
const contents = fs.readFileSync(`${__dirname}/firehose-sample.log`).toString();

module.exports = contents
