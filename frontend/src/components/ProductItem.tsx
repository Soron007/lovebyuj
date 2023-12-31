import { Button, Card } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <Card.Img
          src={product.image}
          alt={product.name}
          className="card-img-top"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button variant="success">Add to Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
