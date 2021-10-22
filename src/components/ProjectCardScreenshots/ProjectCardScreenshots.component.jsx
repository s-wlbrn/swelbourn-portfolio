import React from 'react';

import { useModal } from '../../libs/useModal';

import { ImageModal } from '../ImageModal/ImageModal.component';
import { ScreenshotCarousel } from '../ScreenshotCarousel/ScreenshotCarousel.component';

import './ProjectCardScreenshots.styles.scss';

export const ProjectCardScreenshots = ({ screenshots }) => {
  const { modalActive, modalIndex, openModal, closeModal, scrollModal } =
    useModal(screenshots);

  return (
    <>
      {modalActive && (
        <ImageModal
          modalIndex={modalIndex}
          imageList={screenshots}
          scrollModal={scrollModal}
          closeModal={closeModal}
        />
      )}
      <ScreenshotCarousel screenshots={screenshots} openModal={openModal} />
    </>
  );
};
