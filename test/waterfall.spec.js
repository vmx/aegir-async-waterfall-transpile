/* eslint-env mocha */
'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
chai.use(dirtyChai)
const expect = chai.expect

const mymodule = require('../src')

describe('bogus test', () => {
  it('should run', () => {
    console.log(mymodule)
    expect(true).to.be.true()
  })
})
