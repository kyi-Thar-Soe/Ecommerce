const initialState = {
    electronicProduct : []
}
export const electronicProduct = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_ELECTRONICPRODUCTS':
            return {...state,data: action.payload};
        default: 
            return state;
    }
}