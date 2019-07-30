/**
 * app/redux/{{name}}
 */

/**
 * Initial State
 * ---
 * This is your initial state upon starting the app, provided state hasn't
 * been persisted from a previous launch.
 */

const initialState = {
  value: 'Default Value'
};

/**
 * Types
 * ---
 * These are your action types. They should be strings that may or may not be
 * exported for use elsewhere.
 */

export const UPDATE_STRING = '{{name}}/UPDATE_STRING';

/**
 * Action Creators
 * ---
 * These are the functions that will either return an Action object or a
 * function that accepts (dispatch, getState) (see redux-thunk for more info)
 */
export const updateString = (value: string) => {
  return {
    type: UPDATE_STRING,
    value
  };
}

export const updateStringAsync = (value: string, delay: number = 2000) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(updateString(value));
    }, delay);
  };
}

/**
 * Reducer
 * ---
 * This is the function that will accept the current state and the action. It
 * will return a new instance of state that has been modified by whatever
 * action was passed in.
 */

export default function {{name}}Reducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_STRING:
    return {
      ...state,
      value: action.value
    };

  default:
    return state;
  }
}
