import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  -webkit-box-shadow: 0px 0px 17px -10px #000000;
  box-shadow: 0px 0px 17px -10px #000000;
  margin: 15px 10px;
  border-radius: 20px;
  padding: 15px 0;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 18px;
  color: #444;
  font-weight: bold;
  margin-left: 20px;

  width: ${props => `${100 / props.length}%`};
`;

export const ContainerControls = styled.div`
`;

export const Control = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  background-color: #E0EDF2;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;
