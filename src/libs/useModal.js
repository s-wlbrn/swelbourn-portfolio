import { useState } from 'react';

export const useModal = (imageList) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (i) => {
    setModalIndex(i);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const scrollModal = (n) => {
    let updatedModalIndex = modalIndex + n;

    // handle looping screenshot array
    if (updatedModalIndex < 0) {
      updatedModalIndex = imageList.length - 1;
    } else if (updatedModalIndex > imageList.length - 1) {
      updatedModalIndex = 0;
    }

    setModalIndex(updatedModalIndex);
  };

  return {
    modalActive,
    modalIndex,
    openModal,
    closeModal,
    scrollModal,
  };
};
