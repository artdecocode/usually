import { makeTestSuite } from 'zoroaster'
import usually from '../../src'

const T = makeTestSuite('test/result/usually.md', {
  getResults(input) {
    const params = JSON.parse(input)
    const res = usually(params)
    return res
  },
})

export default T