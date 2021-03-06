/* eslint-disable react/prop-types */
import React from 'react';
import Dialog from 'react-native-dialog';

const DialogContainer = ({ onClose, visible, onAccept }) => {
  return (
    <Dialog.Container visible={visible} onBackdropPress={onClose}>
      <Dialog.Title>Pedido</Dialog.Title>
      <Dialog.Description>¿Desea hacer el pedido?</Dialog.Description>
      <Dialog.Button label="Sí" onPress={onAccept} />
      <Dialog.Button label="No" onPress={onClose} />
    </Dialog.Container>
  );
};

export default DialogContainer;
