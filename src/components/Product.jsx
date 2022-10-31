import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const IconGroup = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`;
const Container = styled.div`
  position: relative;
  flex: 1;
  height: 350px;
  min-width: 280px;
  margin: 5px;
  background-color: #f5fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover ${IconGroup} {
    opacity: 1;
  }
`;

const Square = styled.div`
  width: 200px;
  height: 300px;
  background-color: white;
  position: absolute;
  z-index: 1;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Square />
      <Image src={item.img} />
      <IconGroup>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </IconGroup>
    </Container>
  );
};

export default Product;
