#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { options } from './src/options.js'
import path from 'path'
import { getContent } from './src/content.js';
const __dirname = path.resolve()

const fileName = '.gitignore'
const fullPath = path.resolve(__dirname, fileName)

const { type } = await options()

await create(fullPath)

async function create(path: string) {
    try {
        writeFileSync(path, await getContent(type))
        console.log('\n .gitignore is generated successfully! 🎉')
    } catch (error) {
        console.log('looks like something wrong: ' + error);
    }
}