import { getAllData } from '../data'
import { Sign, isBasic } from './utils.js'

const data = getAllData()
export function getContent(type: string) {
  let content = data[type]
  if (!isBasic(type)) {
    const basic = getBasic()
    content = basic.concat(content)
  }
  content.unshift(Sign())
  return content.join('\n')
}

export function getBasic() {
  return data.basic
}
