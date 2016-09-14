import { Schema, arrayOf } from 'normalizr'

const bangumiSchema = new Schema('bangumi', {
  idAttribute: 'bangumi'
})

export const Schemas = {
  BANGUMI: bangumiSchema,
}

export const SCHEMAS = {
  bangumi: 'BANGUMI',
}
