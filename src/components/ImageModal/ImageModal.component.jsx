import React from "react"
import Modal from "react-modal"

import "./ImageModal.styles.scss"

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.80)",
    zIndex: 2,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    width: "100%",
    margin: "32px 1rem",
    padding: 0,
    border: 0,
    backgroundColor: "rgba(0, 0, 0, 0.00)",
  },
}

export const ImageModal = ({
  modalActive,
  modalIndex,
  imageList,
  closeModal,
  scrollModal,
}) => {
  return (
    <Modal
      isOpen={modalActive}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Screenshot"
      closeTimeoutMS={300}
    >
      <div className="container-modal-arrow" onClick={() => scrollModal(-1)}>
        <button className="modal-arrow-left" type="button" />
      </div>
      <aside className="modal-body" onClick={closeModal}>
        <figure className="modal-image-container">
          <div
            className="modal-close-button"
            role="button"
            onClick={closeModal}
          >
            <div className="modal-close-icon" />
          </div>
          <img
            src={imageList[modalIndex]?.screenshot}
            alt="Project screenshot"
            className="modal-image"
            onClick={e => e.stopPropagation()}
          />
        </figure>
      </aside>
      <div className="container-modal-arrow" onClick={() => scrollModal(-1)}>
        <button className="modal-arrow-right" type="button" />
      </div>
    </Modal>
  )
}
