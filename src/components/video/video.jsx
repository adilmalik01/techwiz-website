import React from 'react';
import "../products/product.css"

const VideoEmbed = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <iframe
                src="./Factory.mp4"
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoEmbed;
