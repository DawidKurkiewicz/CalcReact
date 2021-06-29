export const CHAT_SET_IS_LOADING = 'SET CHAT IS LOADING'

export const setIsLoading = () => ({
  type: CHAT_SET_IS_LOADING,
})

export const initialState = {
  isLoading: false
}

export const chatReducer = (store = initialState, action) => {
  switch (action.type) {
    case CHAT_SET_IS_LOADING:
      return {
        ...store,
        isLoading: !store.isLoading
      }
    default:
      return store;
  }
}