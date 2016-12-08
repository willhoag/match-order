import { test } from 'ava'
import matchOrder from './'


const a = { id: 12032, title: 'hi' }
const b = { id: 1232, title: 'cats' }
const c = { id: 103, title: 'no it was that' }

test('should match order with same length array', (t) => {
  const list = [a, b, c]
  const to = [c, b, a]
  const ordered = matchOrder({list, to})
  t.deepEqual(ordered, to)
})

test('should handle custom comparing function', (t) => {
  const list = [a, b, c]
  const to = [c, b, a]
  const compare = (a, b) => a.title === b.title
  const ordered = matchOrder({list, to, compare})
  t.deepEqual(ordered, to)
})

test('should match order with different length array', (t) => {
  let list = [a, b, c]
  let to = [c, a]
  let expect = [c, a, b]
  let ordered = matchOrder({ list, to })
  t.deepEqual(ordered, expect)

  list = [c, a]
  to = [a, b, c]
  expect = [a, c]
  ordered = matchOrder({ list, to })
  t.deepEqual(ordered, expect)
})

test('should handle undefinds', (t) => {
  let list = [a, b, c]
  let to = undefined
  let ordered = matchOrder({list, to})
  t.deepEqual(ordered, list)

  list = undefined
  to = [c, b, a]
  ordered = matchOrder({list, to})
  t.deepEqual(ordered, [])
})
