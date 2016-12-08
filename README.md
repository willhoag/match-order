# match-order
for matching the order of one array to another accounting length and content differences


[![Build Status](https://travis-ci.org/willhoag/match-order.svg?branch=master)](https://travis-ci.org/willhoag/match-order)
[![npm version](https://badge.fury.io/js/match-order.svg)](http://badge.fury.io/js/match-order)

If you use any of my packages, please star them on github. It’s a great way of getting feedback and gives me the kick to put more time into their development. If you encounter any bugs or have feature requests, just open an issue report on Github.

Follow me on Twitter [@devhoag](http://twitter.com/devhoag)

## Description
This takes two arrays and a comparitor ((a,b) -> bool) and
returns a new array with the items from the first (list) array that match as
close as possible to the second array (to) based on a simple, 4 step, algorithm.


1. Put matched `list` items into the same index as `to`
2. Fill gaps with remaining `list` if available
3. Add remaining `list` at end
4. Collapse gaps if any

## Example
```js
import matchOrder from 'match-order'
import deepEqual from 'deep-equal'

const a = { id: 12032, title: 'hi' }
const b = { id: 1232, title: 'cats' }
const c = { id: 103, title: 'no it was that' }

let const compare = (a, b) => a === b

let list = [a, b, c]
let to = [c, a]

deepEqual(matchOrder({
  list,
  to,
  compare
}), [c, a, b]) // ture

compare = (a, b) => a.id === a.id

list = [c, a]
to = [a, b, c]

deepEqual(matchOrder({
  list,
  to,
  compare
}), [a, c]) // true
```

## Usage
```js
const matchedArray = matchOrder(options)
```

### options
- `list:arr` - The array to change order
- `to:arr` - The array to match order
- `compare: fn: (a, b) -> bool (default: identity)` - prop identifier to match by
or a comparing function that takes an item list each array and returns a bool - true for match and false for non-match.
- `collapse:bool (default: true)` - Whether or not to collapse empty indexes

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.


```bash
npm install match-order --save
```

## License
ISC
