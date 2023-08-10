import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="d-flex flex-column">
      <header>
        <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand>with❤️ByUJ</Navbar.Brand>
          </Container>

          <Nav className="me-3">
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
