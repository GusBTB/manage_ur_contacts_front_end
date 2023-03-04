import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Centered = styled.div`
  height: 65%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  justify-content: space-between;
  @media (min-width: 800px) {
    width: 50%;
  }
`;
export const CenteredUpperLogo = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Input = styled.input`
  width: 75%;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  padding-left: 15px;
  :focus {
    background-color: white;
    outline: none;
  }
  ::placeholder {
    color: black;
    font-weight: 400;
  }
`;

export const Title = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

export const Button = styled.button`
  background-color: white;
  border: 1px solid blue;
  color: blue;
  border-radius: 15px;
  cursor: pointer;
  width: 75%;
  height: 40px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
`;
