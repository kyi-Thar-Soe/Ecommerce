import {Card,CardImg,CardBody,CardTitle,CardFooter} from 'reactstrap';
import './ListPage.css';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { getChosenProducts } from '../Middleware/getChosenProducts';

export default function ListPage({data}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  increment = (id) => {
    dispatch({
      type: 'INCREMENT',
  })
   dispatch(getChosenProducts(id))
  }
const gotoDetails = (id) => {
  navigate(`/details/${id}`);
  }

  return (
    <div>
        <div className=' d-flex flex-wrap justify-content-around mt-5 container'>
          {data?.map((item,index) => {
            return (
          <Card style={{width: "18rem"}} key={index} className='mb-3 border-0'>
                <div className='d-flex justify-content-center align-items-center gap-5 mt-2'>
                <CardImg
                  alt="Card image cap"
                  src={item?.image}
                  top
                  style={{width: "100px",height: "100px"}}
                  onClick={()=> gotoDetails(item?.id)}
                />
                <p className="m-0 me-4 text-warning fs-4">$ {item?.price}</p>
                </div>
              <CardBody>
                <div className='mb-3'>
                <CardTitle tag="h5" className='text-nowrap overflow-hidden'>
                    {item?.title}
                </CardTitle>
                </div>
                <CardFooter>
                    <button className="btn btn-outline-secondary me-3 buy_Button text-dark"  onClick={() =>increment(item?.id)}>
                      Buy
                    </button>
                </CardFooter>
              </CardBody>
               
          </Card>
          )
        })}
      </div>
    </div>
    )
}
