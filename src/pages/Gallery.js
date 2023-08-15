import React from 'react';
import Banner from '../components/pages/Banner';
import GalleryBody from '../components/pages/Gallery/GalleryBody';

const Gallery = () => {
  return (
    <div>
      <Banner title={`Gallery`} />
      <GalleryBody />
    </div>
  );
};

export default Gallery;
