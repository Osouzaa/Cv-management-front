import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 74.4vw;
  height: 88vh;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 5%;
  margin-left: 5%;
  justify-content: center;
  align-items: start;

  

  @media (min-width: 600px) {
    margin-top: 2%;
    margin-left: 10%;
  }

  @media (min-width: 1200px) {
    margin-top: 4%;
    margin-left: 23.4%;
  }

  @media (min-width: 2560px) {
    margin-top: 3%;
    margin-left: 18.2%;
  }

  @media (min-width: 1920px) {
    margin-top: 3%;
    margin-left: 18.2%;
  }
`;