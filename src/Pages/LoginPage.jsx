import './LoginPage.css';
import { Row,Col,Card,Button, CardBody, FormGroup, Label,Form } from "reactstrap";
import { useRef, useState } from "react";
import {useForm} from 'react-hook-form';
import { ApiCall } from '../ApiService/ApiCall';
import { setToken } from '../utils/token';
import { useNavigate } from 'react-router';
export default function LoginPage(){
    const[showPassword,setShowPassword] = useState(false);
    const [isLogin,setIsLogin] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit =async (data) => {
        if (data){
            const url = isLogin? "http://localhost:3000/login": "http://localhost:3000/users";
          const tempData = await ApiCall(url, 'post', data)
            console.log(tempData)
            setToken(tempData?.accessToken);
            navigate('/dashboard');
          }
         
     }

   return (
    <Row className="login" style={{minHeight: "100vh"}}>
    <div className='login_overlay d-flex justify-content-center align-items-center'> 
    <Col md={4}>
            <Card className='login_card'>
                <CardBody className="p-5">
                <h3 className='mb-4'>{isLogin? "Login" : "Sign Up"}</h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label>Email</Label>
                            <input type="email" placeholder="email" className="form-control"
                            {...register('email',{ required: true })}/>
                            {errors.email && (
                            <span className="text-danger">Email is required</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                        <Label>Password</Label>
                            <input type={showPassword? "text" : "password"} placeholder="password"  className="form-control"
                            {...register('password',{ required: true })}/>
                            {errors.password && (
                            <span className="text-danger">Password is required</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <input type="checkbox" className="me-2" onChange={() =>setShowPassword((prevShowPassword) => !prevShowPassword)}/>
                            <Label>Show Password</Label>
                        </FormGroup>
                        <Button type="submit" className="btn w-100 mb-3" color="primary">
                            {isLogin ? "Login" : "Sign Up"}
                        </Button>
                        {isLogin ? <span className="text-primary" onClick={() => setIsLogin(false)}>Not register yet?</span> : <span className="text-primary" onClick={() => setIsLogin(true)}>Login</span>}
                        
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </div>
    </Row>
   )
}