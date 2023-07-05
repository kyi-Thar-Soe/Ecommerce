const initialState = {
    allProduct : [],
    filteredProducts: [],
}
export const allProduct = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_ALLPRODUCTS':
            return {
                ...state,
                data: action.payload,
                filteredData: action.payload,
              };
        default: 
            return state;
    }
}
{/*case 'FILTER_PRODUCTS':
                const filtered = state.data.filter(product =>
                  product.title.toLowerCase().includes(action.payload.toLowerCase())
                );
                return {
                  ...state,
                  filteredData: filtered,
                };*/}