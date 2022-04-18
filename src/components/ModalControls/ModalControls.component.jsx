import React from 'react';

import './ModalControls.styles.scss';

export const ModalControls = ({ pageNumber, total, scrollModal }) => {
  // stops scroll button click from closing modal
  const clickScroll = (e) => {
    e.stopPropagation();
    scrollModal(e.target.name === 'modal-prev' ? -1 : 1);
  };

  return (
    <div className="modal-controls">
      <button
        className="modal-scroll"
        type="button"
        name="modal-prev"
        onClick={clickScroll}
      >
        <div className="modal-arrow-left" />
        Prev
      </button>
      <div className="modal-page-number">{`${pageNumber} of ${total}`}</div>
      <button
        className="modal-scroll"
        type="button"
        name="modal-next"
        onClick={clickScroll}
      >
        <div className="modal-arrow-right" />
        Next
      </button>
    </div>
  );
};
