import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', padding: '0px' })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem
          title={category.title}
          img={category.img}
          key={category.id}
        />
      ))}
    </Container>
  );
};

export default Categories;
