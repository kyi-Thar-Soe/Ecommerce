import { ApiCall } from "../ApiService/ApiCall"

export const getChosenProducts = (id) => {
    return async (dispatch) => {
        const response = await ApiCall(`https://fakestoreapi.com/products/${id}`,'get');
        console.log("chosen respone",response);
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
export const restoreChosenProducts = (id) => {
    return async (dispatch) => {
        const response = await ApiCall(`https://fakestoreapi.com/products/${id}`,'get');
        console.log("restore",response)
        dispatch ( {
        type: 'RESTORE_CHOSENPRODUCTS',
        payload: response,
        })
    }
  };