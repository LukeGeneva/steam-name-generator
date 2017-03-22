# Steam Name Generator
Generates random pairings of adjectives and nouns to make creative Steam names
(or any username really).

## Usage
Install dependencies with npm first.
```
npm install
```

You can generate a single username by simply running `index.js`.
```
$ node index.js
material witch-hazel
```

To view a continuous stream of names add the `-a` flag.
```
$ node index.js -a
deserving automatic transmission
strange coupon sheet
adverse noteholder
...
```

The interval defaults to five seconds between generations. To change this, add
a millisecond argument after the `-a` flag. For example, a two-second interval
can be triggered as follows:
```
$ node index.js -a 2000
double corn syrup
repressed airbase
glaring jelly bean
...
```

Use `Ctrl+C` to stop generating names.
