import test from 'tape'
import rebeccapurple from './src'
import jss from 'jss'

test('jss plugin', assert => {
  jss.use(rebeccapurple())
  assert.equals(jss.createStyleSheet({
    'test': {
      color: 'rebeccapurple'
    }
  }).toString(), '.test--jss-0-0 {\n  color: rgb(102, 51, 153);\n}')
  assert.end()
})
