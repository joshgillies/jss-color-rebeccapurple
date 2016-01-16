import test from 'tape'
import camelCase from 'jss-camel-case'
import defaultUnit from 'jss-default-unit'
import rebeccapurple from './src'
import { create } from 'jss'

test('basic useage', assert => {
  const jss = create()
  jss.use(rebeccapurple())
  assert.equals(jss.createStyleSheet({
    'test': {
      color: 'rebeccapurple'
    }
  }).toString(), '.test--jss-0-0 {\n  color: rgb(102, 51, 153);\n}')
  assert.end()
})

test('advanced useage', assert => {
  const jss = create()
  jss.use(defaultUnit())
  jss.use(camelCase())
  jss.use(rebeccapurple())
  assert.equals(jss.createStyleSheet({
    'test': {
      lineHeight: 100,
      color: 'rebeccapurple'
    }
  }).toString(), '.test--jss-0-1 {\n  line-height: 100px;\n  color: rgb(102, 51, 153);\n}')
  assert.end()
})
