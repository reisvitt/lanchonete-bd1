import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '../../components';
// import { Icon } from '../../../../assets/icons';

import { Accordion as AccordionStyled, Body, Header } from './styled';

function Accordion({ title, subtitle, children }) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <AccordionStyled on={click.toString()} onClick={handleClick}>
      <Header>
        {title && <Typography attr="h1">{title}</Typography>}
        {subtitle && <Typography attr="div">{subtitle}</Typography>}
        {
          // <Icon name={click ? 'angle-down-light' : 'angle-right-light'} />
        }
      </Header>
      <Body mb="30px" opacity={click ? '1' : '0'}>
        <Box p={['20px', '40px']} d={click ? 'block' : 'none'}>
          {children}
        </Box>
      </Body>
    </AccordionStyled>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
