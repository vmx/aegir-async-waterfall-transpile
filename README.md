Example for async in an async/waterfall
=======================================

This is a minimal example to show that currently using `async` in an `async/waterfall` won't work with the Browser bundle that is created by `aegir`.

Running manually
----------------

To see the problem, first we run it with Node.js, where it works:

```console
$ npm install
$ node src/index.js
script is running
result: Hello World!
```

Next create a bundle and open it in the Browser:

```console
$ npx aegir build
[1] Child
       21 modules
Child
       21 modules
```

Now open the `index.html` in your Browser. The output in the console will be:

```
script is running
```

It is missing the `result: Hello World!`.


Running as tests
----------------

You can also run it as tests. You need to run them in production mode.

```console
$ NODE_ENV=production npx aegir test -t node -t browser
Test Node.js
Warning: Could not find any test files matching pattern: test/node.js
script is running


result: Hello World!
  bogus test
{}
    ✓ should run


  1 passing (6ms)

Test Browser


ℹ ｢wdm｣: 
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
ℹ ｢wdm｣: 
ℹ ｢wdm｣: Compiled successfully.
HeadlessChrome 71.0.3578 (Linux 0.0.0) LOG: 'script is running'
HeadlessChrome 71.0.3578 (Linux 0.0.0) LOG: Object{}
  bogus test
    ✓ should run


  1 passing (7s)
```

You can see that `Hello World!` isn't printed in case of the Browser test.
