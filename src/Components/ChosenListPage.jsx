import './ChosenListPage.css'
import { useSelector } from "react-redux"
import { Modal,ModalHeader,ModalBody,Card,CardBody, CardImg } from "reactstrap";

export default function ChosenListPage ({modal,toggle,count}) {
    const {chosenProducts} = useSelector((state) => state.chosenProduct);
  return (
    <>
    <Modal isOpen={modal} toggle={toggle} className="custom-modal-dialog">
    <div className='modal-card'>
      <ModalHeader toggle={toggle}>
        <h3>Shopping <span className='text-warning'>{count}</span> items</h3>
      </ModalHeader>
      <ModalBody>
        {chosenProducts?.map((chosenItem,index) => {
         return (
        <Card key={index} className='bg-transparent border-dark'>
          <div className='d-flex'>
          <CardImg src={chosenItem?.image} className='chosen-image'></CardImg>
          <CardBody>
            <p className='mb-0'>{chosenItem?.title}</p>
            <span className='text-warning d-flex justify-content-end me-3 fs-5'>$ {chosenItem?.price}</span>
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