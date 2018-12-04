# usually

[![npm version](https://badge.fury.io/js/usually.svg)](https://npmjs.org/package/usually)

`usually` Will Generate Usage Of A Node.js Command-Line Application.

```sh
yarn add -E usually

# or with npm.sucks
npm i usually
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>


## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`usually(config: Config): string`](#usuallyconfig-config-string)
  * [`Config`](#type-config)
- [Licence](#licence)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import usually from 'usually'

// or

const usually = require('usually')
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `usually(`<br/>&nbsp;&nbsp;`config: Config,`<br/>`): string`

Create a string to display as a help message.

__<a name="type-config">`Config`</a>__

|    Name     |              Type              |                               Description                               |
| ----------- | ------------------------------ | ----------------------------------------------------------------------- |
| __usage*__  | _Object&lt;string, string&gt;_ | The map with possible arguments (flags, options) and their information. |
| description | _string_                       | What does the program do?                                               |
| line        | _string_                       | The summary of the program in one line.                                 |
| example     | _string_                       | The Example of the program usage.                                       |

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

	-h	print help
	-c	execute this command

  Example:

    usually -c command2
```

---

The algorithm will tab the usage object and all new lines will appear indented to the required padding.

```js
import usually from 'usually'

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
```
```fs
Run the usually

	-h	print help
	-c	execute this command, that will perform
	  	the operations on the CPU and return result
	  	upon the full execution or terminate after
	  	30s of inactivity.
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/11.svg?sanitize=true"></a></p>

## Licence

(c) [Art Deco][1] 2018

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>


