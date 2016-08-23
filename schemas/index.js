import { Schema, arrayOf, normalize } from 'normalizr'

const shotSchema = new Schema('shots', {
  idAttribute: shot => shot.id
})

// Schemas for Github API responses.
export default {
  SHOT: shotSchema,
  SHOT_ARRAY: arrayOf(shotSchema)
}
