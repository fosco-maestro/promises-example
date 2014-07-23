# Promises Example

Sometimes I have problem to remember how to create correct promises and deferred object. So this project is my reminder.

For better promises examples look at [bellbind/using-promise-q](https://github.com/bellbind/using-promise-q) and [kriskowal/q](https://github.com/kriskowal/q).

## Run Examples

First init node modules by using command:

```
$ npm install
```

Then using node you can run each of examples:

### Chain Example

```
$ node examples/chain.js
```

Out put should be:

```
1
2
1
Now the same with chain promises:
1
2
1
```
### Loop Example

```
$ node examples/loop.js
```

Output:

```
[ { buildNumber: 1, commitHash: 'tyu' },
  { buildNumber: 2, commitHash: 'zxc' },
  { buildNumber: 3, commitHash: 'qwe' } ]
```

## Articles with Examples

- [http://www.joezimjs.com/javascript/patterns-asynchronous-programming-promises/](http://www.joezimjs.com/javascript/patterns-asynchronous-programming-promises/)
- [https://coderwall.com/p/ijy61g](https://coderwall.com/p/ijy61g)
