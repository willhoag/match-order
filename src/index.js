const identity = (a, b) => a === b

export default function matchOrder({
  list=[],
  to=[],
  compare=identity,
  collapse=true
}) {
  if (!list || list.length === 0) return []
  if (!to || to.length === 0) return [].concat(list)

  // put at index
  let remaining = []
  let acc = list.reduce((acc, a) => {
    const comp = (b) => !!compare(a, b)
    const index = to.findIndex(comp)
    if (index > -1) {
      acc[index] = a
    } else {
      remaining.push(a)
    }
    return acc
  }, [])

  // fill gaps with remaining
  for (var i=0; i < acc.length; i++) {
    if (!i in acc && remaining.length) {
      acc[i] = remaining.shift()
    }
  }

  // add reaming on end
  acc = acc.concat(remaining)

  // collapse empties
  if (collapse) acc = acc.filter(x => !!x)

  return acc
}
