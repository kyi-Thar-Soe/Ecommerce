import { useEffect, useRef} from "react";
import ListPage from "../Components/ListPage/ListPage";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Middleware/getAllProducts";

export default function DashboardPage() {
    const {data} = useSelector((state)=> state.allProduct);
    const {loading} = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    },[])
    if(loading){
        return <h1 className="text-secondary d-flex justify-content-center mt-5">Loading...</h1>
    }
    return (
    <div>
    <ListPage data={data}/>
    </div>
    )
}