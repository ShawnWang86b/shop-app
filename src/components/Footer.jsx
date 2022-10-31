import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  height: 40vh;
  padding-top: 20px;
  ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: white;
  background-color: #${(props) => props.bg};
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;
const Payment = styled.img``;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lucy.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} />
          172-210 Burwood Hwy, Burwood East VIC 3151
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineOutlinedIcon style={{ marginRight: '10px' }} />
          contact@lucy.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
