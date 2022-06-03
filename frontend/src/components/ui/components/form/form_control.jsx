import styled from 'styled-components';

export const FormControl = styled.div`
  position: relative;
  margin-bottom: 7px;
  text-align: left;
  
  label {
    a {
      color: '#000';
      text-decoration: none;
    }
  }
  
  > div {
    position: relative;
    padding-top: 8px;
   
    input[disabled] {
      background: rgba(196, 196, 196, .2);
      + label {
        content: '';
        background: rgba(196, 196, 196, .2);
        width: 100%;
        top: -10px !important;
        padding: 5px 10px 0;
      }
    }
    &:not([data-name="phone"]) {
      textarea {
        + label {
          top: -5px;
          left: 0;
          font-weight: bold;
        }
      }

      input:not([type="radio"]) {
        transition: al .1s linear;
        -webkit-appearance: none;
        
        &:required:invalid + label:before {
          content: '*';
        }
      }
      
      select + label {
        top: -5px;
        left: 0;
        font-weight: bold;
      }
    }
  }
`;
