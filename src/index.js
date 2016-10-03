'use strict';

const processEvent = require('./process-event')

function is_start(line) {
  return /Verifying Usage Plan/.test(line)
}

function is_end(line) {
  return /Method completed with/.test(line)
}

module.exports = (service, logFileContents, eventMetadata) => {
  eventMetadata = eventMetadata || {}
  let reducer = (memo, line) => {
    if (is_start(line))
        memo['current'] = []

    memo['current'].push(line.trim())

    if (is_end(line)) {
        let txt = memo['current'].join('\n')
        memo['events'].push(processEvent(service, txt))
    }

    return memo
  }

  let lines = logFileContents.split('\n')
  lines = lines.reduce(reducer, {current: [], events: []})

  return {events: lines.events.map( (e) => Object.assign(e, eventMetadata))}
}
