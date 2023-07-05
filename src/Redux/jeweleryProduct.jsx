const initialState = {
    jeweleryProduct : []
}
export const jeweleryProduct = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_JEWELERYPRODUCTS':
            return {...state,data: action.payload};
        default: 
            return state;
    }
}