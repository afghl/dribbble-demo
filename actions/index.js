// import fetch from 'isomorphic-fetch'
import { CALL_API } from '../middleware/api'

export const SHOTS_REQUEST = 'SHOTS_REQUEST'
export const SHOTS_SUCCESS = 'SHOTS_SUCCESS'
export const SHOTS_FAILURE = 'SHOTS_FAILURE'

// export function requestShots() {
//   console.log('requestShots is called');
//   return {
//     type: SHOTS_REQUEST
//   }
// }
//
// // receive的时候，把json里得到的数据绑到state里。
// // 最后拿到数据时，在reducer里update整个state的数据
// function receiveShots(subreddit, json) {
//   console.log('receiveShots is called.');
//   console.log(subreddit);
//   console.log(json);
// }

// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchShots() {
  console.log('fetchShots() is called...');
  return {
    [CALL_API]: {
      types: [ SHOTS_REQUEST, SHOTS_SUCCESS, SHOTS_FAILURE ],
      endpoint: 'shots',
      schema: null
    }
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function loadShots() {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
    console.log('loadShots is called..');
    return dispatch(fetchShots())
    // console.log('fetchShots is called');
    // // First dispatch: the app state is updated to inform
    // // that the API call is starting.
    // dispatch(requestShots(subreddit))
    //
    // // The function called by the thunk middleware can return a value,
    // // that is passed on as the return value of the dispatch method.
    //
    // // In this case, we return a promise to wait for.
    // // This is not required by thunk middleware, but it is convenient for us.
    //
    // return fetch(`http://www.reddit.com/r/${subreddit}.json`)
    //   .then(response => response.json())
    //   .then(json =>
    //
    //     // We can dispatch many times!
    //     // Here, we update the app state with the results of the API call.
    //
    //     dispatch(receiveShots(subreddit, json))
    //   )

  }
}
