import chai from 'chai'
import findPrime from '../src/utils/findPrime'

chai.should()

describe ('Find Prime Factor', () => {
  it ('should return the prime factor array', () => {
    findPrime(2).should.deep.equal([ 2 ])
    findPrime(3).should.deep.equal([ 3 ])
    findPrime(4).should.deep.equal([ 2, 2 ])
  })
})
