# usually

[![npm version](https://badge.fury.io/js/mnp.svg)](https://badge.fury.io/js/mnp)

`usually` is will generate usage of a Node.js command-line application.

```sh
yarn add -E usually
```

## `usually(config: Object):string`

Create a string to display as a help message.

| Property    | Type   | Description                                          |
|-------------|--------|------------------------------------------------------|
| **usage**   | Object | A map with possible arguments and their information. |
| description | string | What does the program do.                            |
| line        | string | A summary of the program in one line.                |
| example     | string | Example of a program usage.                          |

```js
import usually from 'usually'

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
```

```fs
A test command-line application

  usually [-c command|command2] [-h]

        -h      print help
        -c      execute this command

  Example:

    usually -c command2
```
---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
