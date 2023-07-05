const initialState = {
    menProduct : []
}
export const menProduct = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_MENPRODUCTS':
            return {...state,data: action.payload};
        default: 
            return state;
    }
}