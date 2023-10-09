const initialState = {
  chosenProducts : [],
};

export const chosenProduct = (state = initialState ,action) =>{
  switch(action.type) {
      case 'SET_CHOSENPRODUCTS':
        const product = {...action?.payload, quantity: 1};
          return {
                  ...state,
                  chosenProducts: [...state?.chosenProducts, product],
                  
                  };

      case 'REMOVE_CHOSENPRODUCTS': {
      const updatedProducts = state?.chosenProducts.filter(
              (itemId) => itemId.id !== action.payload.id
            );
            return {
              chosenProducts : updatedProducts,
            };
          }

      case 'INCREASE_QUANTITY' :
        const increaseQuantityProducts = state?.chosenProducts.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
           return {
            ...state,
            chosenProducts: increaseQuantityProducts,
          };
        
      case 'DECREASE_QUANTITY' :
        const decreaseQuantityProducts = state?.chosenProducts.map((item) => {
          if(item.id === action.payload){
            return {...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1}
          }
          return item;
        });
        return {
          ...state,
          chosenProducts: decreaseQuantityProducts,
        }; 
      default:
          return state;
  }
}