const initialState = {
    chosenProduct: [],
    removeChosenProduct: [],
    restoreChosenProducts: [],
};
export const chosenProduct = (state = initialState,action) =>{
    switch(action.type) {
        case 'SET_CHOSENPRODUCTS':
            return {
                    ...state,
                    chosenProducts: [...state?.chosenProduct, action?.payload],
                    
                    };
        case 'REMOVE_CHOSENPRODUCTS':
            const updatedProducts = state.chosenProduct.filter(
                (itemId) => itemId !== action.payload
              );
              return {
               removeChosenProducts: updatedProducts,
              };
        case 'RESTORE_CHOSENPRODUCTS':
            return {
                ...state,
                restoreChosenProducts: [...state?.chosenProduct, action?.payload],
                
                };
        default:
            return state;
    }
}