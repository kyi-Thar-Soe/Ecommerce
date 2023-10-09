import { useSelector } from "react-redux"
import { Table } from "reactstrap"
import './CheckoutPage.css'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from "react-router"

export default function CheckoutPage() {
    const navigate = useNavigate();
    const {chosenProducts} = useSelector((state) => state.chosenProduct);
    const total = chosenProducts?.reduce((pre,cur) => {
        return pre + Number(cur.quantity) * Number(cur.price)
        },0).toFixed(2);
   
    return (
        <>
        <div className="back-button" onClick={() => navigate(-1)}>
        <MdOutlineArrowBackIos/>
        </div>
        <div className="tables">
        <Table bordered className="table-div">
            <thead className="table-header">
                 <tr>
                 <th>No</th>
                 <th  className="w-50">Item Name</th>
                 <th>Quantity</th>
                 <th>Price</th>
                 </tr>
            </thead>
            <tbody className="table-body">
                 {chosenProducts?.map((item, index) => (
                     <tr key={item.id}>
                         <td><span className="item-title">{index + 1}</span></td>
                         <td className="item-name"><span className="item-title">{item.title}</span></td>
                         <td><span className="item-title">{item.quantity}</span></td>
                         <td><span className="item-title">$ {item.price}</span></td>
                     </tr>
                     ))}
            </tbody>
            <tfoot>
                 <tr>
                     <td colSpan={2} className="text-center fw-bold">Total</td>
                     <td></td>
                     <td className="fw-bold text-center">$ {total}</td>
                 </tr>
            </tfoot>
        </Table>
        </div>
        </>
       
    )
}