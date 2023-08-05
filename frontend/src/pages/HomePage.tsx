import { Row, Col } from "react-bootstrap";
import { MessageBox } from "../components/MessageBox";
import { LoadingBox } from "../components/LoadingBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";

export default function HomePage() {
  const { data, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>With❤️ByUJ</title>
      </Helmet>
      {data!.map((prod) => {
        return (
          <Col key={prod?.slug} sm={6} md={4} lg={3}>
            <ProductItem product={prod} />
          </Col>
        );
      })}
    </Row>
  );
}
