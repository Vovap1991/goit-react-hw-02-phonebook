import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 0;
`;

export const ListItem = styled.li`
  font-size: 25px;
  margin-bottom: 20px;
  height: 20px;
`;

export const DeleteContactButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 60px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #5ac5e8;
  font-size: 15px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: white;

  :hover {
    background-color: blue;
  }
`;
