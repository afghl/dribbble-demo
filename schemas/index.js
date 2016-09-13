import { Schema, arrayOf, normalize } from 'normalizr'

const userSchema = new Schema('users', { idAttribute: 'id' })
const shotSchema = new Schema('shots', { idAttribute: 'id' })

shotSchema.define({ user: userSchema })

// Schemas for Dribble API responses.
export default {
  SHOT: shotSchema,
  SHOT_ARRAY: arrayOf(shotSchema)
}
