import "./SidebarPage.css";
import { categoryRoutes } from "../../Pages/RoutePage";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  NavItem,
} from "reactstrap";
import brandlogo from "../../assets/img/brandlogo.png";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { NavLink } from "react-router-dom"; // ✅ Correct import

export default function SidebarPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="nav-container ms-2">
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="d-flex flex-column gap-3" navbar>
              <NavbarBrand className="d-flex justify-content-center align-items-center">
                <img src={brandlogo} alt="brandlogo" />
                <p className="d-none d-lg-inline fs-4 fw-bold ms-3 mt-2">
                  My <span style={{ color: "orange" }}>Store</span>
                </p>
              </NavbarBrand>

              {/* Dashboard Link */}
              <NavItem className="menuItem">
                <NavLink
                  className="text-center text-lg-start border-0 bg-transparent text-dark"
                  to="/dashboard" // ✅ Use `to` instead of `href`
                  onClick={() => setIsOpen(false)} // ✅ Close navbar on click
                >
                  <div style={{ color: theme === "light" ? "black" : "white" }}>
                    <i className="fa-solid fa-house"></i>
                    <span className="d-lg-inline">Dashboard</span>
                  </div>
                </NavLink>
              </NavItem>

              {/* Category Links */}
              <NavItem className="text-center text-lg-start border-0">
                <span
                  className="disabled text-lg-start text-center d-lg-block border-0 bg-transparent mb-2 fw-bold"
                  style={{ color: "orange" }}
                >
                  CATEGORIES
                </span>
                {categoryRoutes?.map((item, index) => (
                  <div className="mb-4" key={index}>
                    <NavLink
                      to={item?.path} // ✅ Corrected routing
                      className="text-dark menuItem"
                      onClick={() => setIsOpen(false)} // ✅ Close navbar on click
                    >
                      <div
                        style={{ color: theme === "light" ? "black" : "white" }}
                      >
                        <i
                          className={`text-center text-lg-start ${item?.icon}`}
                        ></i>
                        <span className="d-lg-inline">{item?.name}</span>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}
