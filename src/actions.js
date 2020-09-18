import * as actionTypes from './actionTypes'

export const bugAdded = (description) => {
  return {
    type: actionTypes.BUG_ADDED,
    payload: {
      description
    }
  }
}

export const bugRemoved = (id) => {
  return {
    type: actionTypes.BUG_REMOVED, 
    payload: {
      id
    }
  }
}

export const bugResolved = (id) => {
  return {
    type: actionTypes.BUG_RESOLVED, 
    payload: {
      id
    }
  }
}

// in JS if Object Key and Value has the same name, it's enought to use just name. it will be assigned equaly name:name