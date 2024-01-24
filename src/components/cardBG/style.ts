import styled from "styled-components";

export const CardInfo = styled.div`
  width: 902px;
  height: 207px;
  overflow: auto;
  margin-top: 81px;

  background: linear-gradient(
    267deg,
    rgba(133, 31, 44, 0.3) 0%,
    rgba(255, 255, 255, 0.16) 14.5%,
    rgba(255, 255, 255, 0.05) 81%,
    rgba(133, 31, 44, 0.3) 100%
  );

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
`;

export const ImageTutorial = styled.img`
  padding-right: 76px;
`;

export const ContentCard = styled.div`
  max-width: 570px;
  max-height: 95px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 37px;
  padding-left: 67px;

  h3 {
    color: #000;

    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #000;

    text-align: justify;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  span {
    color: #851f2c;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 3px;
  }
`;