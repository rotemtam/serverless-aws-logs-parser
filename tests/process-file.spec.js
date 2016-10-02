'use strict';

const processFile = require('../src/index')
const expect = require('chai').expect
const file = require('./mocks/file.mock')

describe('Parsing a log file', () => {
  describe('of api gateway with two events', () => {
    let res;
    before(function () {
      res = processFile('api-gateway', file['api-gateway']['two-events'])
    })

    it('return an events array', () => {
      expect(res.events).to.be.an('Array')
    })

    it('should split the file into 2 events', () => {
      expect(res.events).to.have.lengthOf(2)
    })

    it('each of the events should have a request id attr', () => {
      res.events.forEach( (e) => {
        expect(e).to.have.property('request_id')
      })
    })
  });


});
