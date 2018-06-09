import { equal } from 'zoroaster/assert'
import Context from '../context'
import usually from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof usually, 'function')
  },
  async 'calls package without error'() {
    await usually()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
