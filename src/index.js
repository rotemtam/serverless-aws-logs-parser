'use strict';

const processEvent = require('./process-event')

const DELIMETERS = {
  'api-gateway': {
    START: /Verifying Usage Plan/,
    END: /Method completed with/
  },
  'lambda': {
    START: /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z{1} START/,
    END: /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z{1} REPORT/
  }
}

function is_start(service, line) {
  return DELIMETERS[service].START.test(line)
}

function is_end(service, line) {
  return DELIMETERS[service].END.test(line)
}

module.exports = (service, logFileContents, eventMetadata) => {
  eventMetadata = eventMetadata || {}
  let reducer = (memo, line) => {
    if (is_start(service, line))
        memo['current'] = []

    memo['current'].push(line.trim())

    if (is_end(service, line)) {
        let txt = memo['current'].join('\n')
        memo['events'].push(processEvent(service, txt))
    }

    return memo
  }

  let lines = logFileContents.split('\n')
  lines = lines.reduce(reducer, {current: [], events: []})

  return {events: lines.events.map( (e) => Object.assign(e, eventMetadata))}
}
