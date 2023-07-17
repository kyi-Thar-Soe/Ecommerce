import {useParams} from 'react-router-dom';
import { useState,useEffect, useContext } from 'react';
import { ApiCall } from '../ApiService/ApiCall';
import {Card,CardBody,CardTitle,CardImg,CardText,Row,Col} from 'reactstrap';
import "./DetailPage.css";
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { ThemeContext } from '../Context/ThemeContext';
export default function DetailPage() {
    const {theme} = useContext(ThemeContext);
    const {id} = useParams();
    const [data,setData] = useState([]);
    const detailData = async () => {
        const tempData = await ApiCall(`https://fakestoreapi.com/products/${id}`,'get');
        setData(tempData);
        console.log("detailTempData:",tempData)
        
    };
    useEffect( () => {
        detailData();
    },[]);
   
    const [showDescriptionInfo, setShowDescriptionInfo] = useState(false);
    const descriptionInfo = () => {
        setShowDescriptionInfo(!showDescriptionInfo);
    };
    const [showCategoryInfo, setShowCategoryInfo] = useState(false);
    const categoryInfo = () => {
        setShowCategoryInfo(!showCategoryInfo);
    };
    const [showReviewInfo, setShowReviewInfo] = useState(false);
    const reviewInfo = () => {
        setShowReviewInfo(!showReviewInfo);
    };

    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavouriteClick = () => {
        setIsFavorite(!isFavorite);
      };
    return (
    <div style={{height: "100vh"}}>
    <Card className='container w-75 mt-3 ms-5  bg-transparent border-0'>
    <Row>
        <Col md={5} className='d-flex flex-column align-items-center mt-5 mb-5'>
            <CardImg src={data?.image} alt='img' style={{width: "200px",height: "200px"}}></CardImg>
            <div>
            <h3 className='text-warning  mt-3'>$ {data?.price}</h3>
            </div>
         </Col>
        <Col md={7}>
            <CardBody className='mt-4'>
                <CardTitle>
                    <h4 style={{color: theme === 'light' ? "#484747" : "white"}}>{data?.title}</h4>
                </CardTitle>
                <div className='d-block d-lg-flex  mt-3 mb-2 gap-3'>
                    <button className='btn btn-warning border-0 mb-2' onClick={descriptionInfo}>Description</button>
                    <button className='btn btn-warning border-0 mb-2' onClick={categoryInfo}>Category</button>
                    <button className='btn btn-warning border-0 mb-2' onClick={reviewInfo}>Reviews</button>
                    <button className='fs-5 btn border-0 mb-2' onClick={handleFavouriteClick}>{isFavorite ? <AiFillHeart className='heart'/>  : <AiOutlineHeart/> }</button>
                </div>
                <CardText>
                    {showDescriptionInfo &&  
                    <p className='mt-3'>
                    <i className='fw-bold fs-4 '>Description</i> - <span style={{color: theme === 'light' ? "#484747" : "white"}}>{data?.description}</span>
                    </p>}
                    {showCategoryInfo  && 
                    <p className='mt-3'>
                    <i className='fw-bold fs-4'>Category</i> - <span style={{color: theme === 'light' ? "#484747" : "white"}}>{data?.category}</span></p>}
                    {showReviewInfo  && 
                    <p className='mt-3'>
                    <i className='fw-bold fs-4'>Rating</i> - <span style={{color: theme === 'light' ? "#484747" : "white"}}>{data?.rating.rate}</span></p>}
                </CardText>
            </CardBody>
        </Col>
    </Row>
    </Card>
    </div>
    

    )
    
}