import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { baseUrl } from "../utils/constant";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${baseUrl}`);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );
  return (
    <div>
      <Container>
        <SearchBar setSearchQuery={setSearchQuery} />
        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={5} lg={3}>
              <Card
                style={{
                  width: "15rem",
                  margin: "10px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1",
                }}
              >
                <Card.Img
                  varient="top"
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.name.substring(0, 50)}</Card.Title>
                  <Card.Text>
                    {product.description.substring(0, 150)}...
                  </Card.Text>
                  <h5 className="text-success">${product.price}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
