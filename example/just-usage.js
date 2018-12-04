/* start example */
import usually from '../src'

const res = usually({
  usage: {
    '-h': 'print help',
    '-c': `execute this command, that will perform
the operations on the CPU and return result
upon the full execution or terminate after
30s of inactivity.`,
  },
  description: 'Run the usually',
})
/* end example */
console.log(res)