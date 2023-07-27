import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { sampleProducts } from "./data";

const App = () => {
  return (
    <div className="d-flex flex-column">
      <header>
        <Navbar sticky="top" bg="light" data-bs-theme="light" expand="lg">
          <Container>
            <Navbar.Brand>withLoveByUJ</Navbar.Brand>
          </Container>
          <Nav className="me-3">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProducts.map((prod) => {
              return (
                <Col key={prod?.slug} sm={6} md={4} lg={3}>
                  <img
                    src={prod?.image}
                    alt={prod?.name}
                    className="product-image"
                  />
                  <h2>{prod?.name}</h2>
                  <p>${prod?.price}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
      <div className="text-center">
        <footer>All Rights Reserved</footer>
      </div>
    </div>
  );
};

export default App;
