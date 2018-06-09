import { equal } from 'zoroaster/assert'
import Context from '../context'
import SnapshotContext from 'snapshot-context'
import usually from '../../src'

/** @type {Object.<string, (c: Context, s: SnapshotContext)>} */
const T = {
  context: [
    Context,
    SnapshotContext,
  ],
  'is a function'() {
    equal(typeof usually, 'function')
  },
  async 'generates usage information'({ usage, SNAPSHOT_DIR }, { test, setDir }) {
    setDir(SNAPSHOT_DIR)
    const res = usually({
      usage,
      description: 'A test command-line application',
      line: 'usually [-c command|command2] [-h]',
      example: 'usually -c command2',
    })
    await test('usage.txt', res.trim())
  },
  async 'generates usage information without example'({ usage, SNAPSHOT_DIR }, { test, setDir }) {
    setDir(SNAPSHOT_DIR)
    const res = usually({
      usage,
      description: 'A test command-line application',
      line: 'usually [-c command|command2] [-h]',
    })
    await test('no-example.txt', res.trim())
  },
}

export default T
