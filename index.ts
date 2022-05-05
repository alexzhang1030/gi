#!/usr/bin/env node

import { writeFileSync } from 'fs'
import path from 'path'
import { options } from './src/options.js'
import { getContent } from './src/content.js'
const __dirname = path.resolve()

const fileName = '.gitignore'
const fullPath = path.resolve(__dirname, fileName)

const { type } = await options()

await create(fullPath)

async function create(path: string) {
  try {
    writeFileSync(path, await getContent(type))
    // eslint-disable-next-line no-console
    console.log('\n .gitignore is generated successfully! 🎉')
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(`looks like something wrong: ${error}`)
  }
}
