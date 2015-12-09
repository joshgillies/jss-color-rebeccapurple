var rebeccapurple = require('rebeccapurple')

module.exports = function jssRebeccapurple () {
  return function plugin (rule) {
    if (rule.type !== 'regular') return

    for (var prop in rule.style) {
      if (rule.style[prop].indexOf('rebeccapurple') !== -1) {
        rule.style[prop] = rebeccapurple(rule.style[prop])
      }
    }
  }
}
