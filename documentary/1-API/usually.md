```## usually => string
[
  ["config", "Config"]
]
```

Create a string to display as a help message.

%TYPEDEF types/index.xml Config%

%EXAMPLE: example, ../src => usually%
%FORK-fs example%

---

The algorithm will tab the usage object and all new lines will appear indented to the required padding.

%EXAMPLE: example/just-usage, ../src => usually%
%FORK-fs example/just-usage%

%~%

## Argufy Integration

_Argufy_ is a program that manages arguments for CLI programs by storing them in a separate XML file so that they are readily updatable in both source code and README documentation. It also generates the script that extracts those arguments and works with _Google Closure Compiler_. [Read More](https://github.com/artdecocode/argufy#usually-integration).

%~%