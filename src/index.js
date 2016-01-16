import rebeccapurple from 'rebeccapurple'

export default function jssRebeccapurple () {
  return rule => {
    if (rule.type !== 'regular') return

    for (let prop in rule.style) {
      let value = rule.style[prop]
      if (isString(value) && value.indexOf('rebeccapurple') !== -1) {
        rule.style[prop] = rebeccapurple(value)
      }
    }
  }
}

function isString (test) {
  return typeof test === 'string'
}
