import "./NavbarPage.css";
import cart from "../../assets/img/cartimage.png";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { BsFillCloudSunFill, BsCloudMoonFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getFilterProducts,
} from "../../Middleware/getAllProducts";
import ChosenListPage from "../ChosenListPage/ChosenListPage";
import AboutPage from "../AboutPage/AboutPage";
import { removeToken } from "../../utils/token";
import { useNavigate } from "react-router";

export default function NavbarPage() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState("");
  const [modal, setModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const { count } = useSelector((state) => state.countReducer);
  const { chosenProducts } = useSelector((state) => state.chosenProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTheme = (theme) => {
    setTheme(theme);
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const toggle = () => {
    setModal(!modal);
  };
  const toggleAbout = () => {
    setAboutModal(!aboutModal);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(getFilterProducts(searchValue));
      setSearchValue(event.target.value);
      event.target.value = "";
    }
  };
  const handleClick = (event) => {
    dispatch(getFilterProducts(searchValue));
    setSearchValue(event.target.value);
    event.target.value = "";
  };
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  const handleLogout = () => {
    removeToken();
    navigate("/");
  };
  return (
    <>
      <Navbar className="navbar  navbar-light navbar_bgcolor">
        <div className="search-container ms-4 text-lg-start text-center">
          <input
            type="text"
            placeholder="Search..."
            className="search-input form-control mb-3"
            value={searchValue}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className="search-button" onClick={handleClick}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="flex-start flex-lg-fill"></div>

        <div className="mt-1">
          <button type="button" className=" btn  cart-button">
            <img src={cart} alt="img" className="cartimg" onClick={toggle} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {chosenProducts?.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <div className="d-flex justify-content-end">
            <ChosenListPage modal={modal} toggle={toggle} />
          </div>
          <div>
            <AboutPage aboutModal={aboutModal} toggleAbout={toggleAbout} />
          </div>
        </div>

        <div className="d-lg-flex icon-div">
          <Nav navbar className="navbar-nav">
            <NavItem className="dropdown px-2 nav-item">
              <NavLink
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-user-circle"></i>
              </NavLink>
              <DropdownMenu className="dropdown-menu">
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </NavItem>

            <NavItem className="dropdown me-4">
              <NavLink className="dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fas fa-cog"></i>
              </NavLink>
              <DropdownMenu>
                <DropdownItem onClick={toggleAbout}>About</DropdownItem>
              </DropdownMenu>
            </NavItem>
          </Nav>
          {theme === "light" ? (
            <BsCloudMoonFill
              className="me-4 fs-5 mb-2 text-dark-50 theme-button"
              onClick={() => handleTheme("dark")}
            />
          ) : (
            <BsFillCloudSunFill
              className="me-4 fs-5 mb-2 text-dark-50"
              onClick={() => handleTheme("light")}
            />
          )}
        </div>
      </Navbar>
    </>
  );
}
