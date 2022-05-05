import { basic } from './basic'
import { node } from './node'

export function getAllData(): Record<string, string[]> {
  return {
    basic,
    node,
  }
}
