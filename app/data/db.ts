import type { Schema } from '~/types/Schema'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import config from '~/../config'

// Configure lowdb to write data to JSON file
const adapter = new JSONFile<Schema>(config.dbFilename)

const defaultData: Schema = {
  noteList: [],
}

const db = new Low<Schema>(adapter, defaultData)

// Read data from JSON file, this will set `db.data` content
// If JSON file doesn't exist, defaultData is used instead
await db.read()

export default db
