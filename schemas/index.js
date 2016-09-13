import { Schema, arrayOf, normalize } from 'normalizr'

const userSchema = new Schema('users', { idAttribute: 'id' })
const shotSchema = new Schema('shots', { idAttribute: 'id' })
const commentSchema = new Schema('comments', { idAttribute: 'id' })

shotSchema.define({ user: userSchema })
commentSchema.define({ user: userSchema })

// Schemas for Dribble API responses.
export default {
  SHOT: shotSchema,
  SHOT_ARRAY: arrayOf(shotSchema),
  COMMENT: commentSchema,
  COMMENT_ARRAY: arrayOf(commentSchema),
}
