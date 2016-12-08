import matchOrder from './dist/'
import test from 'ava'


const a = { id: 12032, title: 'hi' }
const b = { id: 1232, title: 'cats' }
const c = { id: 103, title: 'no it was that' }

test(async t => {
  const list = [a, b, c]
  const to = [c, a]
  const expect = [c, a, b]
  const ordered = matchOrder({ list, to })
  t.deepEqual(ordered, expect)
})

test(async t => {
  const list = [c, a]
  const to = [a, b, c]
  const expect = [a, c]
  const compare = (a, b) => a.id === a.id
  const ordered = matchOrder({ list, to, compare })
  t.deepEqual(ordered, expect)
})
