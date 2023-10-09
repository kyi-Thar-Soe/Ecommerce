import { useEffect} from "react";
import ListPage from "../Components/ListPage/ListPage";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProducts } from "../Middleware/getWomenProducts";

export default function Women_ClothPage() {
    const {data} = useSelector((state)=> state.womenProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWomenProducts())
    },[])
    return (
    <div>
    <ListPage data={data}/>
    </div>
    )
}