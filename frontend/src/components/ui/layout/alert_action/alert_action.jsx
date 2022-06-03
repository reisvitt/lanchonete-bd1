import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

function AlertAction({ modalAlert }) {
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(!open);
    setShow(true);
  }, [modalAlert]);

  if (!show) return null;

  return (open
    && (
    <>
      <ModalDialogOverlay onClick={handleClose} />
      <ModalDialogContent>
        <ModalDialogBody>Esse e-mail já tem acesso ao Todas Group!</ModalDialogBody>
        <ModalDialogFooter>
          <Link to="/login"><Button px="40px">Clique aqui para fazer seu login</Button></Link>
        </ModalDialogFooter>
      </ModalDialogContent>
    </>
    )
  );
}

export default AlertAction;

AlertAction.propTypes = {
  modalAlert: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const ModalDialogOverlay = styled.div`
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 70;
`;

export const ModalDialogContent = styled.div`
  position: fixed;
  width: 80%;
  max-width: 420px;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 71;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  border-radius: 5px;
  padding: 30px 20px;
`;

export const ModalDialogBody = styled.div`
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalDialogFooter = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    width: 100%;
    button {
      padding: 0 40px;
    }
  }
`;
