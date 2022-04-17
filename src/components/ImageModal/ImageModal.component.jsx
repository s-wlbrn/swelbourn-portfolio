import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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

  const image = getImage(imageList[modalIndex]?.screenshot);

  return (
    <Modal
      isOpen
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Screenshot"
      closeTimeoutMS={300}
    >
      <button
        className="modal-scroll"
        type="button"
        onClick={() => scrollModal(-1)}
      >
        <div className="modal-arrow-left" />
        Prev
      </button>
      <aside className="modal-body" onClick={closeModal}>
        <figure className="modal-image-container">
          <button
            className="modal-close-button"
            type="button"
            onClick={closeModal}
          >
            <div className="modal-close-icon" />
          </button>
          <GatsbyImage
            image={image}
            alt="Project screenshot"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </figure>
      </aside>
      <button
        className="modal-scroll"
        type="button"
        onClick={() => scrollModal(1)}
      >
        <div className="modal-arrow-right" />
        Next
      </button>
    </Modal>
  );
};
