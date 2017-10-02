import { Schema, arrayOf, normalize } from 'normalizr'

const userSchema = new Schema('users', { idAttribute: 'id' })
const shotSchema = new Schema('shots', { idAttribute: 'id' })
const commentSchema = new Schema('comments', { idAttribute: 'id' })

shotSchema.define({ user: userSchema })
commentSchema.define({ user: userSchema })
userSchema.define({ shots: arrayOf(shotSchema)})

// Schemas for dribbble API responses.
export default {
  SHOT: shotSchema,
  SHOT_ARRAY: arrayOf(shotSchema),
  COMMENT: commentSchema,
  COMMENT_ARRAY: arrayOf(commentSchema),
}
