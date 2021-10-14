import React, { useEffect } from 'react';
import Modal from 'react-modal';

import './ImageModal.styles.scss';

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    zIndex: 2,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    margin: '32px 1rem',
    padding: 0,
    border: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.00)',
  },
};

export const ImageModal = ({
  modalIndex,
  imageList,
  closeModal,
  scrollModal,
}) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') {
        scrollModal(-1);
      } else if (e.key === 'ArrowRight') {
        scrollModal(1);
      }
    };

    window.addEventListener('keydown', handleKey);

    return function removeListener() {
      window.removeEventListener('keydown', handleKey);
    };
  }, [scrollModal]);

  return (
    <Modal
      isOpen
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Screenshot"
      closeTimeoutMS={300}
    >
      <div className="container-modal-arrow" onClick={() => scrollModal(-1)}>
        <button className="modal-arrow-left" type="button">
          Previous
        </button>
      </div>
      <aside className="modal-body" onClick={closeModal}>
        <figure className="modal-image-container">
          <div
            className="modal-close-button"
            role="button"
            onClick={closeModal}
            tabIndex="0"
          >
            <div className="modal-close-icon" />
          </div>
          <img
            src={imageList[modalIndex]?.screenshot}
            alt="Project screenshot"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </figure>
      </aside>
      <div className="container-modal-arrow" onClick={() => scrollModal(1)}>
        <button
          className="modal-arrow-right"
          id="modal-arrow-right"
          type="button"
          onClick={() => scrollModal(-1)}
        >
          Next
        </button>
      </div>
    </Modal>
  );
};
