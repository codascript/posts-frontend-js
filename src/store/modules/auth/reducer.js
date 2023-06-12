import * as types from '../types'
import axios from '../../../services/axios'

const initialState = {
  isLoggedIn: false,
  token: false,
  isLoading: false,
  user: {
    id: '',
    name: ''
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state }
      newState.isLoggedIn = true
      newState.token = action.payload.data.token
      newState.isLoading = false
      newState.user.id = action.payload.data.user.id
      newState.user.name = action.payload.data.user.name

      return newState
    }
    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization
      const newState = { ...initialState }
      return newState
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }
    default: {
      return state
    }
  }
}