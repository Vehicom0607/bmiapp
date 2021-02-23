import initialState from "./store";
import * as actionTypes from './actionTypes'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HEIGHT:
            return {
                ...state,
                height: action.height
            }
        case actionTypes.SET_WEIGHT:
            return {
                ...state,
                weight: action.weight
            }
        case actionTypes.SET_BMI:
            return {
                ...state,
                bmi: action.bmi
            }
        default:
            return state
    }
}

export default reducer