import merge from 'lodash/merge'
import values from 'lodash/values'
import mapValues from 'lodash/mapValues'

// Updates an entity cache in response to any action with response.entities.
export default function entities(state = {
  shots: {},
  users: {},
  comments: {}
}, action) {
  if (action.response == undefined || action.response.entities == undefined) {
    return state
  }

  let { entities } = action.response

  if (entities.comments != undefined ) {
    entities = handleComment(entities, action.response.result)
  }
  return merge({}, state, entities)
}

// dribble api doesnt return shot info in comment api,
// need to manually map comment shot id to comment
const handleComment = (entities, result) => {
  let { comments } = entities
  const comment = comments[result[0]]
  const shotId = extraShotIdFrom(comment.likesUrl)
  const shots = { [shotId]: { comments: result } }

  comments = mapValues(comments, (value) => {
    return merge({}, value, { shot: shotId })
  })

  return merge(entities, {
    shots,
    comments
  })
}

const extraShotIdFrom = url => {
  const start = url.indexOf('shots/') + 6
  const end = url.indexOf('comments/') - 1
  return parseInt(url.substring(start, end))
}
