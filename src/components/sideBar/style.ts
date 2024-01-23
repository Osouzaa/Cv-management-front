import styled from "styled-components";

const colors = {
  background: "#2c3e50",
  text: "#ecf0f1",
  textSecondary: "#bdc3c7",
  hoverBackground: "#34495e",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
};

const dimensions = {
  sidebarWidth: "380px",
  listItemHeight: "40px",
};

export const Container = styled.div``;

export const SideBar = styled.div`
  height: 100vh;
  background-color: ${colors.background};
  width: ${dimensions.sidebarWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const Name = styled.p`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.text};
`;

export const Email = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${colors.textSecondary};
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: ${dimensions.listItemHeight};
  padding-left: 1em;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-radius 0.3s, box-shadow 0.3s;
  color: ${colors.text};

  &:hover {
    background-color: ${colors.hoverBackground};
    border-radius: 5px;
    box-shadow: ${colors.boxShadow};
    color: #fff;
  }

  a {
    text-decoration: none;
    color: ${colors.text};
    padding: 15px;
    display: block;
    border-radius: 5px;
  }
`;
