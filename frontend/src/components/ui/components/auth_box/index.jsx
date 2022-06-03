import styled from 'styled-components';
import { Box } from '..';
import { customTheme } from '../../../../../main/styles/theme';

export const AuthBox = styled(Box)`
  width: 470px;
  min-height: 430px;
  left: 485px;
  top: 227px;
  background: linear-gradient(180deg, #33D69F 0%, #6F52ED 100%);
  border-radius: 16px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: ${customTheme.breakpoints[2]}) {
    padding-left: 15%;
    padding-right: 15%;
  }

  input, label{
    color:'#FFF';
  }

  input {
    border-color: '#FFF';
  }

  a {
    text-decoration: none !important;
  }

  button {
    margin: 0 auto;
  }
`;
