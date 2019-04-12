# usually

[![npm version](https://badge.fury.io/js/usually.svg)](https://npmjs.org/package/usually)

_Usually_ Will Generate Usage Of Node.JS Command-Line Applications. It is compatible with [_Argufy_](https://artdecocode.com/argufy/) which can save arguments in the `arguments.xml` file, and extract them with auto-generated JavaScript compatible with _Google Closure Compiler_.

```sh
yarn add -E usually
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>


## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`usually(config: Config): string`](#usuallyconfig-config-string)
  * [`_usually.Config`](#type-_usuallyconfig)
- [Argufy Integration](#argufy-integration)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import usually from 'usually'
```

The types and [externs](externs.js) for _Google Closure Compiler_ via [**_Depack_**](https://github.com/dpck/depack) are defined in the `_usually` namespace.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `usually(`<br/>&nbsp;&nbsp;`config: Config,`<br/>`): string`

Create a string to display as a help message.

__<a name="type-_usuallyconfig">`_usually.Config`</a>__: The configuration object.

|    Name     |              Type               |                               Description                               |
| ----------- | ------------------------------- | ----------------------------------------------------------------------- |
| __usage*__  | _!Object&lt;string, string&gt;_ | The map with possible arguments (flags, options) and their information. |
| description | _string_                        | What does the program do?                                               |
| line        | _string_                        | The summary of the program in one line.                                 |
| example     | _string_                        | The example of the program usage.                                       |

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Argufy Integration

_Argufy_ is a program that manages arguments for CLI programs by storing them in a separate XML file so that they are readily updatable in both source code and README documentation. It also generates the script that extracts those arguments and works with _Google Closure Compiler_. [Read More](https://github.com/artdecocode/argufy#usually-integration).

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>