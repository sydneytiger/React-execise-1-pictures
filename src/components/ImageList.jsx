import './imageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    return <div className="image-grid">{props.images.map(m => <ImageCard key={m.id} image={m} />)}</div>;
}

export default ImageList;