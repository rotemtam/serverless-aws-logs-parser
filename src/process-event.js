'use strict';

const assert = require('assert')
const moment = require('moment')

const service_regex = {
  'api-gateway': {
    ts_start: /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z){1}/,
    ts_end: /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z){1} Method completed/,
    method: /HTTP Method: (.*?),/,
    request_id: /request: (.{36})/,
    request_query_string: /request query string: {(.*)}/,
    request_path: /request path: {(.*)}/,
    resource_path: /Resource Path: (.*)/,
    response_status: /completed with status: (\d{3})/
  },
  'lambda': {
    ts_start: /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z){1} START/,
    ts_end: /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z){1} END/,
    request_id: /START RequestId: (.{36})/,
    duration_ms: /REPORT RequestId: .{36}	Duration: (\d+\.\d+)/,
    billed_duration_ms: /Billed Duration: (\d+) ms/,
    max_memory_used: /Max Memory Used: (\d+) MB/, //,
    memory_size: /Memory Size: (\d+) MB/,
  }
}

module.exports = (service, txt) => {
  let res = {}
  let regex = service_regex[service]
  assert(regex, `No such service: ${service}`)
  for (let expr of Object.keys(regex)) {
    let match = regex[expr].exec(txt)
    if(match && match.length > 1) {
      res[expr] = match[1]
    } else {
      res[expr] = 'N/A'
    }

  }
  if (! res.duration_ms && res.ts_start && res.ts_end) {
    res.duration_ms = moment(res.ts_end) - moment(res.ts_start)
  }
  return Object.assign(res, {raw: txt})
}
