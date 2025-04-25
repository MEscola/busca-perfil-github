import styled from 'styled-components'



const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background-color:#000000;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin: 2rem auto;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-left: 12rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const Title = styled.h1`
  color: #FFFFFF;
  font-size: 3rem;
  font-weight: 600;
  margin: 0;

`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-left: 0;
  }
`;

const Input = styled.input`
  
  flex: 0.7;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 10px 0 0 9px;
  border: 1px solid #DDDDDD;
  background-color: #FFFFFF ;

  @media (max-width: 768px) {
    border-radius: 10px;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #005CFF;
  border: 1px solid #DDDDDD;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 0px 9px 9px 0px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
const ErrorMessage = styled.p`
margin-left: 5rem;
  color: #FF0000;
  margin-top: 1rem;
  line-height: 1.5;
  text-align: center;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #D9D9D9;
  padding: 2rem;
  border-radius: 25px;
  margin-top: 2rem;
  
  
`;

const ProfileImage = styled.img`

  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 2px solid #005CFF;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 0.5rem;
  margin-left: 2rem;
`;


const ProfileName = styled.h2`
flex-direction: column;
  color: #005CFF;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const ProfileBio = styled.p`
  color: #000000;
  font-size: 1rem;
  padding: .3rem;
  margin-top: 0.5rem;

`;



const ProfileUsername = styled.p`
  color: #000000;
  font-weight: 300;
  font-size: 1rem;
  margin: 0;
`;

const ProfileLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #1DA1F2;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;



export const Styled = {
  Container,
  Title,
  Header,
  Form,
  Input,
  Button,
  ErrorMessage,
  ProfileCard,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileBio,
  ProfileUsername,
  ProfileLink,
};
