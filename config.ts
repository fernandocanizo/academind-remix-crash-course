import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// put database file on the root of the project
const __dirname = dirname(dirname(fileURLToPath(import.meta.url)))
const dbFilename = join(__dirname, 'notes.json')

export default {
  dbFilename,
}
