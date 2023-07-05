import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { Container } from "reactstrap";
import AdminLayout from "./Layout/AdminLayout";
import DashboardPage from "./Pages/DashboardPage";
import ElectronicPage from "./Pages/ElectronicPage";
import JeweleryPage from "./Pages/JeweleryPage";
import Men_ClothPage from "./Pages/Men_ClothPage"; 
import Women_ClothPage from "./Pages/Women_ClothPage";
import DetailPage from "./Pages/DetailPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Provider store={store}>
    <Container className="p-0 " fluid>
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
    </Routes>
    </BrowserRouter>
    </Container>
    </Provider>
  )
}

export default App
