# Expression Coding
Write programs in a textual manner by writing and matching expressions line by line

## Features
- Multiple matching strings for a definition

## Feature Roadmap
- Comprehensive built-in library of functions
- Import 3rd party definitions
- Async by default

## How it works

### 1. Write a definition

Type `define:` followed by a string you want to match, variables are captured using curly brackets `{var_name}`

The lines that follow become the steps of your definition

Note `{a}+{b}={c}` is a match that is included in the library

```
define: type something here that includes {a} or {b} giving {c}
a + b = c
```

### 2. Use your definition in another or in your main program

Note: the string `main:` is only needed if your script contains other definitions

```
main:
my_var = 2
another_var = 3
type something here that includes my_var or another_var giving output
print output
```

## Library definitions
There are a few built-in definitions that can be used, including:

```
{a} = {b}
```
```
set {a} to {b}
```
```
{a} * {b} = {c}
```
```
{a} / {b} = {c}
```
```
concat {a} and {b} to give {c}
```
```
print {a}
```

## Interactive web frontend

To experiment with this in an interactive html page, clone this repo and run the following:

```
npm i
npm run prepare-env
tsc -p ./config/tsconfig.json
npm run dev
```

## How to use this library

Install via `npm i apl-expression-coding` then

```
import { runCode } from 'apl-expression-coding';

const output = runCode(myExpressionsCodeStr);

console.log(output);
```

Note: the common library (listed above) is not included by default, to add simply import and run it with your code, via:

```
import { runCode, lib } from 'apl-expression-coding';

const output = runCode(lib + myExpressionsCodeStr);

console.log(output);
```

## For hardcore developers

You can code your own low-level definitions by using `defineJS`, for example:

```
defineJS: {a}+{b}={c}
c.set(parseFloat(a.get()) + parseFloat(b.get()))
```
