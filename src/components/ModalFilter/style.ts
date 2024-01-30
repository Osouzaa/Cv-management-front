import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const Content = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 1000px;
  height: 651px;
  position: relative;
  display: grid;
  grid-template-columns: 291px auto 604px 577px 300px 300px;
  grid-template-rows: auto auto auto 180px; /* Ajuste nas linhas */
  gap: 20px;
  position: relative;
  left: 2em;
`;

export const ContentRange = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2; /* Ajuste na linha */
  width: 291px;
  height: 273px;
  border-radius: 10px;
  border: 1px solid #b67070;
  background: rgba(217, 217, 217, 0);
  margin: 24px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentSelect = styled.div`
  width: 604px;
  height: 273px;
  border-radius: 10px;
  border: 1px solid #b67070;
  background: rgba(217, 217, 217, 0);
  margin: 24px 0 0 14px;
  grid-column: 3;
  grid-row: 1 / span 2; /* Ajuste na linha */
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 95%;
  }
`;

export const ContentOptions = styled.div`
  width: 577px;
  height: 314px;
  border-radius: 10px;
  border: 1px solid #b67070;
  background: rgba(217, 217, 217, 0);
  margin-left: 20px;
  grid-column: 1 / span 3;
  grid-row: 3; /* Ajuste na linha */
  display: flex;
  align-items: center;
`;

// export const ContentText = styled.div`
//   width: 320px;
//   height: 180px;
//   border-radius: 10px;
//   border: 1px solid #b67070;
//   background: rgba(217, 217, 217, 0);
//   margin-left: 10px;
//   grid-column: 4 / span 2; /* Ajuste na coluna e span */
//   grid-row: 3; /* Ajuste na linha */

//   position: absolute;
//   left: -21em;

//   div {
//     width: 95%;
//   }
// `;

export const ContentButtons = styled.div`
  position: absolute;
  bottom: 3em;
  right: 3em;

  height: 200px;
  width: 250px;

  display: flex;
  flex-direction: column;
  gap: 13px;

  button {
    width: 250px;
    height: 40px;
    border-radius: 10px;
    background: #851f2c;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
    border: none;

    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;

export const CardRecrutamento = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  border-radius: 10px 10px 0 0;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
  text-align: center;

  top: -2.8em;
  left: 2em;
`;
