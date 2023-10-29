import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import { ButtonContainer } from "./components/style/ButtonContainer";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  ForgotPassword,
  HorizontalLine,
  IconContainer,
  InputContainer,
  LoginWith,
  MainContainer,
  Login,
} from "./components/style/MainContainer.style";
import ButtonLink from "./components/ButtonLink";

function App() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
  const GithubBackground =
    "linear-gradient(to right, #4078c0 0%, #6e5494 100%)";
  const LinkedinBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <>
      <MainContainer>
        <Login>Login</Login>
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
          <ButtonLink link="https://www.facebook.com/mahmud.hassan.140193/">
            <Icon color={FacebookBackground}>
              <FaFacebook />
            </Icon>
          </ButtonLink>
          <ButtonLink link="https://github.com/alif819015">
            <Icon color={GithubBackground}>
              <FaGithub />
            </Icon>
          </ButtonLink>
          <ButtonLink link="https://www.linkedin.com/in/mahmudhasan819015">
            <Icon color={LinkedinBackground}>
              <FaLinkedinIn />
            </Icon>
          </ButtonLink>
        </IconContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </MainContainer>
    </>
  );
}

export default App;
