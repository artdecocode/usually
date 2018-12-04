import usually from '../src'

const res = usually({
  usage: {
    '-h': 'print help',
    '-c': 'execute this command',
  },
})

console.log(res)