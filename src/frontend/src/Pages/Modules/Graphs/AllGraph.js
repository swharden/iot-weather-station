import React from 'react';
import All from './GraphPhotos/All.png'

function AllPhotoComponent() {
    return (
        <div className="whiteCard allGraphBox">
            <img src={All} alt="A graph showing all data" className='allGraph' />
        </div>
    );
};

export default AllPhotoComponent;