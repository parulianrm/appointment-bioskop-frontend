import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalComponent({ showModal, handleClose, children }) {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        {children}
      </Modal>
    </>
  );
}

export default ModalComponent;
