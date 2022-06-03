/* eslint-disable no-unsafe-optional-chaining, no-nested-ternary */
import styled from 'styled-components';
import { applyProps } from '../../../../utils/styled_helpers';

export const Button = styled.button`
  width: 100%;
  text-align: center;
  border: 2px solid #fff;
  transition: all .3s ease;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 4px 16px 0px #00000080;
  padding: 22px 16px;
  border-radius: 8px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: Montserrat;
  
  background: ${props => props.outline ? 'transparent' : 'rgb(231,111,84)'};
  background: ${props => props.outline ? 'transparent' : 'linear-gradient(90deg, rgba(231,111,84,1) 0%, rgba(255,107,0,1) 100%)'};

  color: ${(props) => (props?.outline ? (props?.bg || '#FF6B00') : '#fff')};
  border-color:  ${(props) => (props?.outline ? (props?.bg || '#FF6B00') : 'transparent')};
  display: flex;
  align-items:center;
  justify-content:center;

  &:hover {
    opacity: 0.75;
  }
  &:disabled {
    background-color: ${(props) => {
    if (props?.bg) {
      const [r, g, b] = props?.bg.match(/\w\w/g).map((x) => parseInt(x, 16));
      return `rgba(${r}, ${g}, ${b}, .3)`;
    }
    const [r, g, b] = '#FF6B00'.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, .3)`;
  }};
    border-color: transparent;
    cursor: not-allowed;
  }
   ${(props) => applyProps(props)}
`;

export const ButtonLogin = styled.button`
  text-align: center;
  border: 2px solid ${'#000'};
  transition: all .3s ease;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0px 4px 16px 0px #00000080;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: ${18};
  background: #fff;
  color: ${'#000'};
  display: flex;
  align-items:center;
  justify-content:center;
  &:hover {
    background-color: transparent;
    color: ${'#000'};
    border-color: ${'#000'};
  }
  &:disabled {
    background: ${() => {
    const [r, g, b] = '#FF6B00'.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, .3)`;
  }};
    color: ${'#000'};
    border-color: transparent;
    cursor: not-allowed;
  }
  min-width: 60%;
`;

export const ButtonCancel = styled(Button)`
  background: ${"#c4c4c4"};
  color: #fff;

  &:hover {
    background-color: transparent;
    color: ${'#000'};
    border-color: ${'#000'};
  }

  &:disabled {
    background: ${() => {
    const [r, g, b] = '#000'.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, .3)`;
  }};
      color: #fff;  
    }
`;
export const ButtonOutline = styled.button`
  text-align: center;
  border: 1px solid transparent;
  transition: all .3s ease;
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  height: 46px;
  border-radius: 23px;
  font-size: 16px
  background-color: transparent;
  color: ${'#000'};
  border-color: ${'#000'};
  &:hover {
    background: ${'#000'};
    color: #fff;
  }
  &:disabled {
    background: ${() => {
    const [r, g, b] = '#000'.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, .3)`;
  }};
    color: #fff;
    border-color: transparent;
    cursor: not-allowed;
  }
`;
