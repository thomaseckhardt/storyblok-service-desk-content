type Options = {
  hue?: [number, number]
  sat?: [number, number]
  lit?: [number, number]
}

export function toHSL(string: string, opts: Options = {}) {
  var h, s, l
  opts = opts ?? {}
  opts.hue = opts?.hue || [0, 360]
  opts.sat = opts?.sat || [75, 100]
  opts.lit = opts?.lit || [40, 60]

  var range = function (hash, min, max) {
    var diff = max - min
    var x = ((hash % diff) + diff) % diff
    return x + min
  }

  var hash = 0
  if (string.length === 0) return hash
  for (var i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  h = range(hash, opts.hue[0], opts.hue[1])
  s = range(hash, opts.sat[0], opts.sat[1])
  l = range(hash, opts.lit[0], opts.lit[1])

  return `hsl(${h}, ${s}%, ${l}%)`
}
