import { createReducer } from 'reduxsauce'
export const INITIAL_STATE = { isLoading: false, results: [], inputValue: '' }
export const CALC_SET_IS_LOADING = 'SET CALC IS LOADING'
export const CALC_REMOVE_RESULT = 'REMOVE CALC RESULT'
export const CALC_ADD_RESULT = 'ADD CALC RESULT'
export const CALC_ADD_VALUE = 'ADD CALC VALUE'
export const CALC_CLEAR = 'CLEAR INPUT'
export const CALC_COUNT = 'COUNT'
export const CALC_EVAL = 'EVAL'
export const CALC_DOT = 'DOT'

export const HANDLERS = {
    [CALC_SET_IS_LOADING]: (state = INITIAL_STATE, { isLoading }) =>
        ({ ...state, isLoading: !isLoading }),
    [CALC_REMOVE_RESULT]: (state = INITIAL_STATE, { results }) => ({
        ...state, results
    }),
    [CALC_ADD_RESULT]: (state = INITIAL_STATE, { results }) => ({
        ...state, results
    }),
    [CALC_ADD_VALUE]: (state = INITIAL_STATE, { inputValue }) => ({
        ...state, inputValue
    }),
    [CALC_CLEAR]: (state = INITIAL_STATE, { inputValue }) => ({
        ...state, inputValue
    }),
    [CALC_COUNT]: (state = INITIAL_STATE, { inputValue }) => ({
        ...state, inputValue
    }),
    [CALC_EVAL]: (state = INITIAL_STATE, { results }) => ({
        ...state, results
    }),
    [CALC_DOT]: (state = INITIAL_STATE, { inputValue }) => ({
        ...state, inputValue
    }),
};



export const setIsLoading = (isLoading) => ({
    type: CALC_SET_IS_LOADING,
    value: isLoading
})

export const addResult = (val) => (dispatch, getState) => {
    const store = getState().calcReducer;
    dispatch({
        type: CALC_ADD_RESULT,
        results: [...store.results, val]
    })
}
export const removeResult = (val) => (dispatch, getState) => {
    const store = getState().calcReducer;
    console.log(store)
    for (let i = 0; i < store.results.length; i++) {
        if (store.results[i] === val) {
            store.results.splice(i, 1);
        }
    }
    dispatch({
        type: CALC_REMOVE_RESULT,
        results: [...store.results]
    })
}

export const addRValue = (val) => (dispatch, getState) => {
    const store = getState().calcReducer;
    console.log(store)
    if (store.inputValue === "0" || (val === "0" && store.inputValue === "")) {
        store.inputValue = "0."
    } else {
        store.inputValue = store.inputValue + val;
    }
    dispatch({
        type: CALC_ADD_VALUE,
        inputValue: store.inputValue
    })
}
export const clearRInput = () => (dispatch, getState) => {
    const store = getState().calcReducer;
    store.inputValue = ''
    dispatch({
        type: CALC_CLEAR,
        inputValue: store.inputValue

    })
}

export const countR = (val) => (dispatch, getState) => {
    const store = getState().calcReducer;
    if (store.inputValue.toString() !== "" && store.inputValue.toString().slice(-1).match(regex) == null) {
        store.inputValue = store.inputValue + val
    } else if (store.inputValue !== "") {
        store.inputValue = store.inputValue.toString().slice(0, -1) + val
    }
    dispatch({
        type: CALC_COUNT,
        inputValue: store.inputValue
    })
}

const regex = new RegExp(/[\W_]/);

export const evaluateR = () => (dispatch, getState) => {
    const store = getState().calcReducer;
    if (store.inputValue !== "" && store.inputValue.toString().slice(-1).match(regex) == null) {
        // eslint-disable-next-line
        const result = eval(store.inputValue)
        store.results = [...store.results, result]
        console.log(result)
        store.inputValue = result
    } else if (store.inputValue !== "") {
        // eslint-disable-next-line
        const result = eval(store.inputValue.toString().slice(0, -1))
        store.results = [...store.results, result]
        store.inputValue = result
    }
    dispatch({
        type: CALC_EVAL,
        results: store.results,
        inputValue: store.inputValue
    })
}

export const addDotR = () => (dispatch, getState) => {
    const store = getState().calcReducer;
    if (store.inputValue === "" || (store.inputValue === "0" && store.inputValue.toString().slice(-1).match(regex) == null)) {
        store.inputValue = "0."
    } else if (store.inputValue.toString().slice(-1).match(regex)) {
        // eslint-disable-next-line
        store.inputValue = store.inputValue
    }
    else {
        store.inputValue = store.inputValue + "."
    }
    dispatch({
        type: CALC_DOT,
        inputValue: store.inputValue

    })
}
export default createReducer(INITIAL_STATE, HANDLERS)
