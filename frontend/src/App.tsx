import { useContext, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Store } from "./Store";

const App = () => {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div className="d-flex flex-column">
      <header>
        <Navbar sticky="top" expand="lg">
          <Container>
            <Navbar.Brand>with❤️ByUJ</Navbar.Brand>
          </Container>

          <Nav className="me-3">
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <div className="text-center">
        <footer>All Rights Reserved</footer>
      </div>
    </div>
  );
};

export default App;
