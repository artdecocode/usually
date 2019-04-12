import makeTestSuite from '@zoroaster/mask'
import usually from '../../src'

export default makeTestSuite('test/result/usually', {
  getResults(input) {
    const params = JSON.parse(input)
    const res = usually(params)
    return res
  },
})