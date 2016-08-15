import { Schema, arrayOf } from 'normalizr'

const userSchema = new Schema('users', {
  idAttribute: 'author'
})

const bangumiSchema = new Schema('bangumi', {
  idAttribute: bangumi => 'bangumi'
})

const appindexSchema = new Schema('appindex', {
  idAttribute: appindex => 'appindex'
})

export const Schemas = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  BANGUMI: bangumiSchema,
  APP_INDEX: arrayOf(appindexSchema)
}

export const SCHEMAS = {
  bangumi: 'BANGUMI',
  appindex: 'APP_INDEX'
}
