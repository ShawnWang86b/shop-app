import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  flex: 8;
  padding-left: 20px;
  border: none;
`;
const Button = styled.button`
  flex: 1;
  color: white;
  background-color: teal;
  border: none;
  padding-top: 5px;
  cursor: pointer;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
