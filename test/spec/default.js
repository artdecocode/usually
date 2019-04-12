import { equal } from 'zoroaster/assert'
import Context from '../context'
import usually from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof usually, 'function')
  },
  async 'generates usage information'({ usage }) {
    const res = usually({
      usage,
      description: 'A test command-line application',
      line: 'usually [-c command|command2] [-h]',
      example: 'usually -c command2',
    })
    return res
  },
  async 'generates usage information without example'({ usage }) {
    const res = usually({
      usage,
      description: 'A test command-line application',
      line: 'usually [-c command|command2] [-h]',
    })
    return res
  },
}

export default T
