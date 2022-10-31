import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  position: relative;
  height: 70vh;
  flex: 1;
  margin: 3px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: gray;
`;

const CategoryItem = (props) => {
  return (
    <Container>
      <Image src={props.img} alt="" />
      <Info>
        <Title>{props.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
