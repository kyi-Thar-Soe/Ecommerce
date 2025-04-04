import { Outlet, useNavigate } from "react-router";
import { Row, Col } from "reactstrap";
import SidebarPage from "../Components/SidebarPage/SidebarPage";
import NavbarPage from "../Components/NavBarPage/NavbarPage";
import { ThemeContext } from "../Context/ThemeContext";
import { useEffect, useState } from "react";
import { getToken } from "../utils/token";
export default function AdminLayout() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    let isMounted = true;
    const check = async () => {
      const token = await getToken();
      if (!token && isMounted) {
        navigate("/");
      }
    };
    check();
    return () => {
      isMounted = false; // Cleanup function to prevent unwanted re-renders
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Row
        style={{
          backgroundColor: theme === "light" ? "whitesmoke" : " #515a5a",
        }}
      >
        <Col
          md={2}
          className="p-0"
          style={{ borderRight: "1px solid #C7C7C7" }}
        >
          <SidebarPage />
        </Col>
        <Col md={10} className="p-0">
          <NavbarPage />
          <Outlet />
        </Col>
      </Row>
    </ThemeContext.Provider>
  );
}
