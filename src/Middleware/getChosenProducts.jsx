import { ApiCall } from "../ApiService/ApiCall"

export const getChosenProducts = (id) => {
    return async (dispatch) => {
        const response = await ApiCall(`https://fakestoreapi.com/products/${id}`,'get');
        dispatch ( {
        type: 'SET_CHOSENPRODUCTS',
        payload: response,
        })
    }
} 
export const removeChosenProducts = (id) => {
    return async (dispatch) => {
        const response = await ApiCall(`https://fakestoreapi.com/products/${id}`,'get');
        dispatch ( {
        type: 'REMOVE_CHOSENPRODUCTS',
        payload: response,
        })
    }
}  

export const increaseQuantityProducts = (id) => {
    return async (dispatch) => {
        dispatch ( {
        type: 'INCREASE_QUANTITY',
        payload: id,
        })
    }
}
