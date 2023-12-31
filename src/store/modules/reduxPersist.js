import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'FRONT-SOLINSKI',
      storage,
      whitelist: ['auth']
    },
    reducers
  )

  return persistedReducers
}