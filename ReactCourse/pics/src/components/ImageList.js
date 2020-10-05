import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    // iterate over props.images (we have 10 images so 10 img are made)
    // imagevar is just a variable, you can use any variable
                                    // destructured the img array (imagevar) -> {description,id,urls}
    const images = props.images.map((imagevar) => {
        return <ImageCard key={imagevar.id} image={imagevar} />
    });
    
    return <div className="image-list">{images}</div>
};

export default ImageList;