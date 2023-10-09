import { useEffect} from "react";
import ListPage from "../Components/ListPage/ListPage";
import { useDispatch, useSelector } from "react-redux";
import { getMenProducts } from "../Middleware/getMenProducts";
export default function Men_ClothPage() {
    const {data} = useSelector((state)=> state.menProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenProducts())
    },[])
    return (
    <div>
    <ListPage data={data}/>
    </div>
    )
}