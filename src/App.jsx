import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import { ButtonContainer } from "./components/style/ButtonContainer";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  ForgotPassword,
  HorizontalLine,
  IconContainer,
  InputContainer,
  LoginWith,
  MainContainer,
  WelcomeText,
} from "./components/style/MainContainer.style";

function App() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button content="Sign Up" />
        </ButtonContainer>
        <LoginWith>or Login With</LoginWith>
        <HorizontalLine />
        <IconContainer>
          <Icon color={FacebookBackground}>
            <FaFacebook />
          </Icon>
          <Icon color={InstagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </IconContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </MainContainer>
    </>
  );
}

export default App;
