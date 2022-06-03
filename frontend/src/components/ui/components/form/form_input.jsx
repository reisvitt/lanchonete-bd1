import styled from 'styled-components';

export const FormInput = styled.input`
  width: 100%;
  padding: 20px 12px;
  font-size: 16px;
  background: transparent;
  border: 1px solid #848484;
  border-radius: 10px;
  outline-color: #FF6B00 !important;
  max-width: 95%;

  ::placeholder {
    color: #B6B6B6;
  }
`;

export const FormSelect = styled(FormInput).attrs({ as: 'select' })``;

export const TextArea = styled(FormInput).attrs({ as: 'textarea' })`
  height: 80px;
  resize: none;
`;

export const IcoView = styled.button`
  position: absolute;
  bottom: 17%;
  right: 30px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
`;
