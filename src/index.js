/**
 * @typedef {Object} Config
 * @property {Object.<string, string>} usage An map with arguments and their explanations.
 * @property {string} description Description
 * @property {string} line A line to display as summary
 * @property {string} example An example
 */

/**
 * Generate a usage string.
 * @param {Config} config
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
