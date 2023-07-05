import {useParams} from 'react-router-dom';
import { useState,useEffect, useContext } from 'react';
import { ApiCall } from '../ApiService/ApiCall';
import {Card,CardBody,CardTitle,CardImg,CardText,Row,Col, Button} from 'reactstrap';
import "./DetailPage.css";
import { BsFillStarFill } from 'react-icons/bs';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { ThemeContext } from '../Context/ThemeContext';
export default function DetailPage() {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const detailData = async () => {
        const tempData = await ApiCall(`https://fakestoreapi.com/products/${id}`,'get');
        setData(tempData);
        
    };
    useEffect( () => {
        detailData();
    },[id]);
   
    const [showDescriptionInfo, setShowDescriptionInfo] = useState(false);
    const descriptionInfo = () => {
        setShowDescriptionInfo(!showDescriptionInfo);
    };
    const [showCategoryInfo, setShowCategoryInfo] = useState(false);
    const categoryInfo = () => {
        setShowCategoryInfo(!showCategoryInfo);
    };

    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavouriteClick = () => {
        setIsFavorite(!isFavorite);
      };
    const {theme} = useContext(ThemeContext);
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
            <CardBody>
                <CardTitle>
                    <h4 style={{color: theme === 'light' ? "#484747" : "white"}}>{data?.title}</h4>
                </CardTitle>
                <div className='d-block d-lg-flex gap-5 mt-3 mb-2 '>
                    <button className='btn btn-warning border-0 mb-2' onClick={descriptionInfo}>Description</button>
                    <button className='btn btn-warning border-0 mb-2' onClick={categoryInfo}>Category</button>
                </div>
                <CardText>
                    {showDescriptionInfo &&  
                    <p className='mt-3'>
                    <i className='fw-bold fs-4 '>Description</i> - <span style={{color: theme === 'light' ? "#484747" : "white"}}>{data?.description}</span>
                    </p>}
                    {showCategoryInfo  && 
                    <p className='mt-3'>
                    <i className='fw-bold fs-4'>Category</i> - <span style={{color: theme === 'light' ? "#484747" : "white"}}>{data?.category}</span></p>}
                </CardText>
                <div className='d-flex gap-3'>
                <div style={{border: "1px solid gray",width: "100px"}} className='d-flex justify-content-around align-items-center rounded-2'>
                    <button className='btn btn-sm fs-6 border-0'>-</button>
                    <span className='fs-5'>1</span>
                    <button className='btn btn-sm fs-6 border-0'>+</button>
                </div>
                <button className='fs-5 btn border-0' onClick={handleFavouriteClick}>{isFavorite ? <AiFillHeart className='heart'/>  : <AiOutlineHeart/> }</button>
                </div>
                
                
            </CardBody>
        </Col>
    </Row>
    </Card>
    </div>
    

    )
    
}