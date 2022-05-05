import { readdirSync } from 'fs'
import prompts from 'prompts'
import {
  blue,
  cyan,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from 'kolorist'
import { getAllData } from './data'

type ChoiceType = {
  title: string,
  value: string,
}

const AllData = getAllData()

export async function options() {
  const response = await prompts({
    type: 'select',
    name: 'type',
    message: '选择一种 gitignore 模板',
    choices: (() => {
      const choices: ChoiceType[] = []
      const files = Object.keys(AllData)
      const colors = [yellow, cyan, blue, magenta,
        lightRed,
        red,
        reset]
      files.forEach((f, i) => {
        const name = f.split('.')[0]
        let color
        if (i >= colors.length)
          color = colors[i % colors.length]
        else
          color = colors[i]

        choices.push({
          title: color(name),
          value: name,
        })
      })
      return choices
    })(),
  })
  return response
}
