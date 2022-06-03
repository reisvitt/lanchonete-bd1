import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FormLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 5px;
  display: block;

  span {
    color: red;
    padding-left: 2px;
  }
`;

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
};
