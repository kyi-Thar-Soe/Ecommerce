import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Container } from "reactstrap";
import AdminLayout from "./Layout/AdminLayout";
import DashboardPage from "./Pages/DashboardPage";
import ElectronicPage from "./Pages/ElectronicPage";
import JeweleryPage from "./Pages/JeweleryPage";
import Men_ClothPage from "./Pages/Men_ClothPage"; 
import Women_ClothPage from "./Pages/Women_ClothPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    
    <Container className="p-0 h-100" fluid>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route element={<AdminLayout/>}>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="electronics" element={<ElectronicPage/>}/>
      <Route path="jewelery" element={<JeweleryPage/>}/>
      <Route path="mencloth" element={<Men_ClothPage/>}/>
      <Route path="womencloth" element={<Women_ClothPage/>}/>
      <Route path="details/:id" element={<DetailPage/>}/>
      </Route>
      <Route path="checkout" element={<CheckoutPage/>}/>
    </Routes>
    </BrowserRouter>
    </Container>
   
  )
}

export default App
