import styled from "styled-components";

export const IconStyle = styled.div`
height: 2.5rem;
width: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4rem;
color: white;
cursor: pointer;
background: ${(props) => props.background};
svg{
    width: 1.5rem;
    height: 1.5rem;
}
`;