const initialState = {
    womenProduct : []
}
export const womenProduct = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_WOMENPRODUCTS':
            return {...state,data: action.payload};
        default: 
            return state;
    }
}