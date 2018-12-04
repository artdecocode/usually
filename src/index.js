/**
 * Generate a usage string.
 * @param {Config} config
 * @param {Object<string, string>} config.usage A map with possible arguments and their information.
 * @param {string} [config.description] What does the program do.
 * @param {string} [config.line] A summary of the program in one line.
 * @param {string} [config.example] Example of a program usage.
 * @example
 * // Get the usage string and print it.
 * import usually from '../src'
 *
 * const res = usually({
 *   usage: {
 *     '-h': 'print help',
 *     '-c': 'execute this command',
 *   },
 *   description: 'A test command-line application',
 *   line: 'usually [-c command|command2] [-h]',
 *   example: 'usually -c command2',
 * })
 *
 * console.log(res)
 */
export default function usually(config = {}) {
  const {
    usage = {},
    description,
    line,
    example,
  } = config
  const commands = Object.keys(usage)
  const descriptions = Object.values(usage)

  const [commandLength] = commands.reduce(([longestName = 0, longestDescription = 0], name) => {
    /** @type {string} */
    const command = usage[name]
    const theLongest = command.split('\n')
      .reduce((acc, c) => {
        if (c.length > acc) return c.length
        return acc
      }, 0)
    if (theLongest > longestDescription) longestDescription = theLongest
    if (name.length > longestName) longestName = name.length
    return [longestName, longestDescription]
  }, [])

  const pad = (string, length) => {
    const l = length - string.length
    const ts = ' '.repeat(l)
    const s = `${string}${ts}`
    return s
  }

  const usa = commands.reduce((acc, command, i) => {
    const value = descriptions[i]
    const vals = value.split('\n')
    const c = pad(command, commandLength)
    const [firstVal, ...otherVals] = vals
    const firstLine = `${c}\t${firstVal}`
    const emptyPad = pad('', commandLength)
    const otherLines = otherVals.map(val => {
      const r = `${emptyPad}\t${val}`
      return r
    })
    const res = [...acc, firstLine, ...otherLines]
    return res
  }, [])

  const USA = usa.map(a => `\t${a}`)
  const u = `${description}

  ${line}

${USA.join('\n')}
`


  if (example) {
    return `${u}
  Example:

    ${example}
`
  }

  return u
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config
 * @prop {Object<string, string>} usage A map with possible arguments and their information.
 * @prop {string} [description] What does the program do.
 * @prop {string} [line] A summary of the program in one line.
 * @prop {string} [example] Example of a program usage.
 */
