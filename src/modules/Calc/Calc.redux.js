export const CALC_SET_IS_LOADING = 'SET CALC IS LOADING'

export const CALC_ADD_RESULT = 'ADD CALC RESULT'
export const CALC_REMOVE_RESULT = 'REMOVE CALC RESULT'
//1
export const CALC_ADD_VALUE = 'ADD CALC VALUE'
export const CALC_CLEAR = 'CLEAR INPUT'
export const CALC_COUNT = 'COUNT'
export const CALC_EVAL = 'EVAL'
export const CALC_DOT = 'DOT'

export const setIsLoading = () => ({
    type: CALC_SET_IS_LOADING,
})

export const fetchResult = (val) => async (dispatch, getState) => {
    dispatch(addResultLoading(true));

    try {
        const data = await fetch('/asdfasdf.ksdfgsdf');
        dispatch(addResultSuccess(data))
    } catch (e) {
        dispatch(addResultError(e))
    }
}

export const addResultLoading = (isLoading) => ({
    type: CALC_ADD_RESULT_LOADING,
    isLoading
})

export const addResultSuccess = (data) => ({
    type: CALC_ADD_RESULT_DATA,
    data
})

export const addResultError = (error) => ({
    type: CALC_ADD_RESULT_ERROR,
    error
})

export const removeResult = (val) => (dispatch, getState) => {
    const state = getState();
    let results;

    for (let i = 0; i < state.results.length; i++) {
        if (state.results[i] === action.value) {
            results = state.results.slice(i, 1);
        }
    }

    dispatch({
        type: CALC_REMOVE_RESULT,
        results
    })
}

//2
export const addRValue = (val) => ({
    type: CALC_ADD_VALUE,
    value: val
})
export const clearRInput = () => ({
    type: CALC_CLEAR
})
export const countR = (val) => ({
    type: CALC_COUNT,
    value: val
})
export const evaluateR = () => ({
    type: CALC_EVAL
})
export const addDotR = () => ({
    type: CALC_DOT
})

export const initialState = {
    isLoading: false,
    results: [],
    //3
    inputValue: ''
}
//4
const regex = new RegExp(/[\W_]/);

const actionMap = {
    [CALC_SET_IS_LOADING]: (store, { payload }) => ({
        ...store,
        action: payload
    }),
    [CALC_REMOVE_RESULT]: (store, action) => ({

    })
}

const createReducer = (actionMap) => (store, action) =>
    actionMap[action.type](store, action)


export const calcReducer = (store = initialState, action) => {
    switch (action.type) {
        case CALC_SET_IS_LOADING:
            return {
                ...store,
                isLoading: !store.isLoading
            }
        case CALC_ADD_RESULT:
            console.log(action)
            return {
                ...store,
                results: [...store.results, action.value]
            }
        case CALC_REMOVE_RESULT:
            return {
                ...store,
                results: action.results
            }
            //5
        case CALC_ADD_VALUE:
            if (store.inputValue === "0" || (action.value === "0" && store.inputValue === "")) {
                store.inputValue = "0."
            } else {
                store.inputValue = store.inputValue + action.value;
            }
            console.log(action)
            return {
                ...store,
                inputValue: store.inputValue
            }

        case CALC_CLEAR:
            console.log(store)
            store.inputValue = ''
            return {
                ...store,
                inputValue: store.inputValue
            }
        case CALC_COUNT:
            console.log(action.value)
            if (store.inputValue.toString() !== "" && store.inputValue.toString().slice(-1).match(regex) == null) {
                store.inputValue = store.inputValue + action.value
            } else if (store.inputValue !== "") {
                store.inputValue = store.inputValue.toString().slice(0, -1) + action.value
            }
            return {
                ...store,
                inputValue: store.inputValue
            }
        case CALC_EVAL:
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
            return {
                ...store,
                results: store.results,
                inputValue: store.inputValue
            }
        case CALC_DOT:
            if (store.inputValue === "" || (store.inputValue === "0" && store.inputValue.toString().slice(-1).match(regex) == null)) {
                store.inputValue = "0."
            } else if (store.inputValue.toString().slice(-1).match(regex)) {
                // eslint-disable-next-line
                store.inputValue = store.inputValue
            }
            else {
                store.inputValue = store.inputValue + "."
            }
            return {
                ...store,
                inputValue: store.inputValue
            }
        default:
            return store;
    }
}