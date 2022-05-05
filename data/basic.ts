import { withComment, withNewLine } from '../src/utils.js'

const forNpmPack = [
  withNewLine(withComment('Output of \'npm pack\'')),
  '*.tgz',
]

export const basic = [
  'node_modules',
  '.DS_Store',
  'npm-debug.log*',
  '.pnpm-debug.log*',
  'yarn-debug.log*',
  'yarn-error.log*',
  ...forNpmPack,
]