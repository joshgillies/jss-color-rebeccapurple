var test = require('tape')
var rebeccapurple = require('./')

test('jss plugin', function (assert) {
  var jss = require('jss')
  jss.use(rebeccapurple())
  assert.equals(jss.createStyleSheet({
    'test': {
      color: 'rebeccapurple'
    }
  }).toString(), '.test--jss-0-0 {\n  color: rgb(102, 51, 153);\n}')
  assert.end()
})
