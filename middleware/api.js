import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'
import forOwn from 'lodash/forOwn'

const TOKEN = '5dec7baeb4eb2d56d4b803a2ad8a39dee32de2492732f68fbdb80ceb24ef9ba0'
const API_ROOT = 'https://api.dribbble.com/v1/'

const getFullUrl = (endpoint, params) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  let paramString = `access_token=${TOKEN}`

  forOwn(params, (k, v) => { paramString += `&${v}=${k}` })
  return `${fullUrl}?${paramString}`
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, params, schema) {
  const fullUrl = getFullUrl(endpoint, params)
  console.log(fullUrl);
  return fetch(fullUrl
    ).then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)
      return Object.assign({}, normalize(camelizedJson, schema))
    })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types, params } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types

  next(actionWith({ type: requestType }))

  return callApi(endpoint, params, schema).then(
    response => {
      next(actionWith({
        type: successType,
        response
      }))
    },
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
