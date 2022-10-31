import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 5px solid black;
  width: 25%;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Input = styled.input`
  margin: 10px 0px;
  padding: 15px;
  font-size: 14px;
  min-width: 40%;
`;
const Button = styled.button`
  width: 40%;
  margin: 10px 0px;
  padding: 20px;
  color: white;
  background-color: teal;
  cursor: pointer;
`;
const Link = styled.a`
  text-decoration: underline;
  font-size: 12px;
  cursor: pointer;
  margin: 5px 0px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
