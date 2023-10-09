import './ChosenListPage.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Modal,ModalHeader,ModalBody,Card,CardBody, CardImg, ModalFooter, Button } from "reactstrap";
import {  decreaseQuantityProducts, increaseQuantityProducts, removeChosenProducts } from '../../Middleware/getChosenProducts';
import { RxCross1 } from 'react-icons/rx';

export default function ChosenListPage ({modal,toggle}) {
    const navigate = useNavigate();
    const {chosenProducts} = useSelector((state) => state.chosenProduct);
    const dispatch = useDispatch();

    const cancel = (id) => {
      dispatch({
        type: 'DECREMENT',
        payload: id,
    })
      dispatch(removeChosenProducts(id))
    };

    const increaseQuantity = (id) => {
      dispatch(increaseQuantityProducts(id));
    };
    const decreaseQuantity = (id) => {
      dispatch(decreaseQuantityProducts(id));
    };
    //Total Price
    const total = chosenProducts?.reduce((pre,cur) => {
    return pre + Number(cur.quantity) * Number(cur.price)
    },0).toFixed(2);
    //Checkout
    const checkOut = () => {
        navigate('/checkout')
    };
    
    return (
    <>
    <Modal isOpen={modal} toggle={toggle} className="custom-modal-dialog">
    <div className='modal-card'>
      <ModalHeader toggle={toggle}>
        <span>Shopping 
          <span className='text-light bg-warning py-1 px-3 rounded-1 ms-2 me-2'>{chosenProducts?.length}</span>
           {chosenProducts?.length <=1 ? "item" : "items"}
          </span>
      </ModalHeader>
      <ModalBody>
      {chosenProducts?.map((chosenItem,index) => {
         return (
        <div  key={index}>
        <Card className='bg-transparent border-dark mb-3'>
          <div className='d-flex'>
          <CardImg src={chosenItem?.image} className='chosen-image'></CardImg>
          <CardBody className='w-50'>
            <div className='d-flex justify-content-end me-3 mb-2'>
            <RxCross1 className=' cancel-button'  
            onClick={() => cancel(chosenItem?.id)}/>
            </div>
            <p className='mb-0'>{chosenItem?.title}</p>

            <div className='d-flex align-items-center justify-content-between mt-3'>
            <div className='d-flex gap-2' style={{border: "1px solid gray",borderRadius: "5px"}}>
              <button className='btn border-0 btn-sm' onClick={() => decreaseQuantity(chosenItem?.id)}>-</button>
              <span>{chosenItem?.quantity}</span>
              <button className='btn border-0 btn-sm' onClick={() => increaseQuantity(chosenItem?.id)}>+</button>
            </div>
            <span className='text-warning d-flex justify-content-end me-3 fs-5'>$ {chosenItem?.price}</span>
            </div>
          </CardBody>
          </div>
        </Card>
        </div>
        )
      })}
    </ModalBody>
    <ModalFooter className='total'>
      <p className='total-price'>Total price :</p>
      <p className='fs-4 fw-bold text-warning'>$ {total}</p>
    </ModalFooter>
    <Button className='checkout' onClick={checkOut}>Checkout</Button>
    </div>
  </Modal>
    </>
   
  )

}