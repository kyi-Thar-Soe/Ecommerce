import { useEffect } from "react";
import ListPage from "../Components/ListPage/ListPage";
import { useDispatch, useSelector } from "react-redux";
import { getElectronicProducts } from "../Middleware/getElectronicProducts";
export default function ElectronicPage() {
    const {data} = useSelector((state)=> state.electronicProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getElectronicProducts())
    },[])
    return (
    <div>
    <ListPage data={data}/>
    </div>
    )
}