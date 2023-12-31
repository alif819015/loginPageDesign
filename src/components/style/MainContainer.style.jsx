import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0%.3rem;
    }
    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }

  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }

  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export const Login = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalLine = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  backdrop-filter: blur(25px);
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 2rem 0;
  width: 80%;
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
`;
