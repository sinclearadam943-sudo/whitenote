import { readFileSync } from 'fs'
import { resolve } from 'path'

export default {
  watch: ['../data/artworks.json'],
  load(watchedFiles) {
    const dataPath = resolve('./docs/data/artworks.json')
    const content = readFileSync(dataPath, 'utf-8')
    return JSON.parse(content)
  }
}
