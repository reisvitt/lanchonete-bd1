import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { getExtension } from '../../../../utils/extensions';
// import { Icon } from '../../../../assets/icons';

function Attachment({ attachment }) {
  return (
    <AttachmentStyled href={attachment.file.url} download={attachment.title}>
      {
        // <Icon name={getExtension(attachment.file.url)} />
      }
      {attachment.title}
    </AttachmentStyled>
  );
}

export default Attachment;

Attachment.propTypes = {
  attachment: PropTypes.shape({
    title: PropTypes.objectOf(PropTypes.object).isRequired,
    file: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

const AttachmentStyled = styled.a`
  display: flex;
  color: #4F4F4F;
  margin: 25px 0;
`;
