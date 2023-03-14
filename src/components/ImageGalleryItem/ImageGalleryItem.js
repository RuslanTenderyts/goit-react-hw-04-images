import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import {Li , Img} from './ImageGalleryItem.styled'


export const ImageGalleryItem = ({url, largeImage, tags }) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return(
    <Li >
        <Img src={url} alt={tags} onClick={toggleModal}/> 

        {showModal && 
          <Modal onClose={toggleModal}> 
            <img src={largeImage} alt="фото" />
          </Modal>}
    </Li>
  )
}


PropTypes.ImageGalleryItem = {
  url: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired, 
};
