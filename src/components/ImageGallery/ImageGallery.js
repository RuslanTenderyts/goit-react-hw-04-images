import React from "react";
import PropTypes from "prop-types";
import { Gallery, Layout } from './ImageGallery.styled'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'


export const ImageGallery = ({ images }) => {
  return (
    <Layout>
        <Gallery>
        {images.map(({id, webformatURL, tags, largeImageURL}) => (
            <ImageGalleryItem key={id} url={webformatURL} tags={tags} largeImage={largeImageURL} />
        ))}
        
        </Gallery>
    </Layout>
  )
}


PropTypes.ImageGallery = {
  images: PropTypes.arrayOf
    (PropTypes.shape({ 
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired, })
    ).isRequired, 
};