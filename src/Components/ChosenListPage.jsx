import './ChosenListPage.css'
import { useDispatch, useSelector } from "react-redux"
import { Modal,ModalHeader,ModalBody,Card,CardBody, CardImg } from "reactstrap";
import {  increaseQuantityProducts, removeChosenProducts } from '../Middleware/getChosenProducts';
import { RxCross1 } from 'react-icons/rx';

export default function ChosenListPage ({modal,toggle}) {

    const {chosenProducts} = useSelector((state) => state.chosenProduct);

    const dispatch = useDispatch();

    const cancel = (id) => {
      dispatch({
        type: 'DECREMENT',
    })
      dispatch(removeChosenProducts(id))
    };

    const increaseQuantity = (id) => {
    dispatch(increaseQuantityProducts(id));
    };
  return (
    <>
    <Modal isOpen={modal} toggle={toggle} className="custom-modal-dialog">
    <div className='modal-card'>
      <ModalHeader toggle={toggle}>
        <p>Shopping <span className='text-light bg-warning py-1 px-2 rounded-1'>{chosenProducts?.length}</span> items</p>
      </ModalHeader>
      <ModalBody>

        {chosenProducts?.map((chosenItem,index) => {
         return (
        <Card key={index} className='bg-transparent border-dark mb-3'>

          <div className='d-flex'>
          <CardImg src={chosenItem?.image} className='chosen-image'></CardImg>

          <CardBody>
            <div className='d-flex justify-content-end me-3 mb-2'>
            <RxCross1 className='text-danger fs-5 fw-bolder'  
            onClick={() => cancel(chosenItem?.id)}/>
            </div>
            <p className='mb-0'>{chosenItem?.title}</p>

            <div className='d-flex align-items-center justify-content-between mt-3'>
            <div className='d-flex gap-2' style={{border: "1px solid gray",borderRadius: "5px"}}>
              
              <button className='btn border-0 btn-sm'>-</button>
              <span>{chosenItem?.quantity}</span>
              <button className='btn border-0 btn-sm' onClick={() => increaseQuantity(chosenItem?.id)}>+</button>
              
            </div>
            <span className='text-warning d-flex justify-content-end me-3 fs-5'>$ {chosenItem?.price}</span>
            </div>
          </CardBody>

          </div>
        </Card>
        )
        })}

      </ModalBody>
      
    </div>
  </Modal>
    </>
   
  )

}