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
- [`usually(config: Object): string`](#usuallyconfig-object-string)
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



## `usually(config: Object): string`

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

```

## Licence

(c) [Art Deco][1] 2018

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>


