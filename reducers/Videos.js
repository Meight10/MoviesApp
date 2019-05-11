function videos(state = {}, action){ //params: estado anterior, accion que contiene los datos para el nuevo estado
    switch(action.type) {
        case 'SET_SUGGESTION_LIST': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'SET_CATEGORY_LIST': {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export default videos;