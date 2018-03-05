
const expect = require('chai').expect

describe('Dummy', function () {
  it('should return -1 when value is not present ', function () {
    expect([1, 2, 3].indexOf(4)).to.equal(-1)
  })
})
