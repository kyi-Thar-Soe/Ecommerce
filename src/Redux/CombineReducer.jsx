import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { allProduct } from "./allProduct";
import { electronicProduct } from "./electronicProuct";
import { jeweleryProduct } from "./jeweleryProduct";
import { menProduct } from "./menProduct";
import { womenProduct } from "./womenProduct";
import { chosenProduct } from "./chosenProduct";
import { loading } from "./loading";
export const reducer = combineReducers({
    countReducer,
    allProduct,
    electronicProduct,
    jeweleryProduct,
    menProduct,
    womenProduct,
    chosenProduct,
    loading,
})