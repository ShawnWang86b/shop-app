import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Products;
