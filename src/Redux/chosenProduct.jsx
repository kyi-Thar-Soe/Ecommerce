const initialState = {
    chosenProducts: [],
    removeChosenProducts: [],
};
export const chosenProduct = (state = initialState,action) =>{
    switch(action.type) {
        case 'SET_CHOSENPRODUCTS':
            return {
                    ...state,
                    chosenProducts: [...state?.chosenProducts, action?.payload],
                    
                    };
        case 'REMOVE_CHOSENPRODUCTS': {
        const updatedProducts = state.chosenProducts.filter(
                (itemId) => itemId.id !== action.payload.id
              );
              return {
               chosenProducts: updatedProducts,
              };
            }
        default:
            return state;
    }
}