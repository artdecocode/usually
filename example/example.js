import usually from '../src'

const res = usually({
  usage: {
    '-h': 'print help',
    '-c': 'execute this command',
  },
  description: 'A test command-line application',
  line: 'usually [-c command|command2] [-h]',
  example: 'usually -c command2',
})

console.log(res)