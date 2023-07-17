import './SidebarPage.css';
import { categoryRoutes } from '../Pages/RoutePage';
import { Navbar,NavbarToggler,Collapse,Nav,NavbarBrand,NavItem,NavLink } from 'reactstrap';
import brandlogo from '../assets/img/brandlogo.png';
import { useContext, useState } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function SidebarPage() {
    const [isOpen,setIsOpen] = useState(false);
    const {theme} = useContext(ThemeContext);
    const toggle = () => setIsOpen(!isOpen);

    
    
    return (
     <>
        <div className="nav-container ms-2">
            <Navbar light  expand="md">
            <NavbarToggler onClick={toggle}/>
                <Collapse isOpen = {isOpen} navbar> 
                <Nav className=" d-flex flex-column gap-3 " navbar>
                    <NavbarBrand className="d-flex justify-content-center align-items-center">
                        <img src={brandlogo} alt="brandlogo"/>
                        <p className='d-none d-lg-inline fs-4 fw-bold ms-3 mt-2'>My <span style={{color: "orange"}}>Store</span></p>
                    </NavbarBrand>
                    <NavItem className='menuItem'>
                        <NavLink className='text-center text-lg-start border-0 bg-transparent text-dark ' tag="a" href='/dashboard'> 
                        <div style={{color: theme === 'light' ? 'black' : 'white'}}>
                        <i className='fa-solid fa-house'></i>
                        <span className='d-none d-lg-inline'>Dashboard</span>
                        </div>
                        </NavLink>
                    </NavItem>

                    <NavItem className='text-center text-lg-start  border-0'>
                        <NavLink  className='disabled text-lg-start text-center d-none d-lg-block border-0 bg-transparent mb-2 fw-bold'>
                        <span style={{color: "orange"}}>CATEGORIES</span>
                        </NavLink>
                   {categoryRoutes?.map((item,index) => {
                    return (
                            <div className='mb-4' key={index}>
                            <NavLink href={item?.path} className='text-dark menuItem'>
                                <div style={{color: theme === 'light' ? 'black' : 'white'}}>
                                <i className={`text-center text-lg-start ${item?.icon}`}></i>
                                <span className='d-none d-lg-inline'>{item?.name}</span>
                                </div>
                            </NavLink>   
                            </div>
                             
                    )
                   })}
                   </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
    </>
    )
}