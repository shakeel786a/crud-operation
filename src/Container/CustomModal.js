import React from 'react';

import { Modal } from 'react-bootstrap';

function CustomModal(props) {
    const {isVisible, onClose, children} = props;
    return (
        <Modal show={isVisible} onHide={onClose}>
            {children}
        </Modal>
    )
}

export default CustomModal;