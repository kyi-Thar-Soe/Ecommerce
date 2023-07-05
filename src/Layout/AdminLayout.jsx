import { Outlet } from 'react-router';
import {Row,Col} from 'reactstrap';
import SidebarPage from '../Components/SidebarPage';
import NavbarPage from '../Components/NavbarPage';
import { ThemeContext } from '../Context/ThemeContext';
import { useState } from 'react';
export default function AdminLayout() {
    const [theme,setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
        <Row style={{backgroundColor: theme === "light" ? "whitesmoke" : " #515a5a"}} className='h-100'>
            <Col md={2} className="p-0">
               <SidebarPage/>
            </Col>
            <Col md={10} className="p-0">
               <NavbarPage/>
                <Outlet/>
            </Col>
        </Row>
        </ThemeContext.Provider>
       
    )
}