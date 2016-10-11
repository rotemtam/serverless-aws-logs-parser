'use strict';

const expect = require('chai').expect
const events = require('./mocks/firehose-output.mock')
const _ = require('lodash')

const LAMBDA_NAME = '/aws/lambda/someLambdaFunc'

function parseFirehoseToArray(txt) {
  txt = typeof txt == 'undefined' ? '{}' : txt
  txt = txt.replace(/\}\{/g, '},{')
  txt = `[${txt}]`
  return JSON.parse(txt)
}

function splitLogs(parsedFirehose) {
  let byGroup = _.groupBy(parsedFirehose, 'logGroup')
  let byStream = _.mapValues(byGroup, (msgs) => {
    msgs = _.groupBy(msgs, 'logStream')
    msgs = _.mapValues(msgs, (e) => {
      let logEvents = _.map(e, 'logEvents')
      logEvents = [].concat.apply([], logEvents)
      logEvents = _.map(logEvents, (e) => {
        return e.message.trim()
      })
      return logEvents
    })

    return msgs
  })
  return byStream
}
describe('Firehose parsing', () => {
  let res, res2;
  before(() => {
    res = parseFirehoseToArray(events)
    res2 = splitLogs(res)
  });

  describe('parsing a firehose file', () => {

    it('return an array', () => {
      expect(res).to.be.an('Array');
    });

  });

  describe('splitting a parsed firehose file', () => {

    it('should return an object with attrs as log groups', () => {
      expect(_.keys(res2)).to.eql([LAMBDA_NAME]);
    });

    it('each log group should contain an object with keys as log streams', () => {
      _.each(res2[LAMBDA_NAME], (v,k) => {
        expect(k).to.match(/2016\/10\/08\/\[\$LATEST\].*/)
      })
    })

    it('each log stream should contain an array of log messages', () => {
      _.each(res2[LAMBDA_NAME], (v,k) => {
        _.each(v, (msg) => expect(msg).to.be.a('string'))
      })
    })
  });


});
