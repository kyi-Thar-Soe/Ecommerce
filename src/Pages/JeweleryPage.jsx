import { useEffect} from "react";
import ListPage from "../Components/ListPage";
import { useDispatch, useSelector } from "react-redux";
import {getJeweleryProducts} from "../Middleware/getJeweleryProducts";
export default function JeweleryPage() {
    const {data} = useSelector((state)=> state.jeweleryProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJeweleryProducts())
    },[])
    return (
    <div>
    <ListPage data={data}/>
    </div>
    )
}