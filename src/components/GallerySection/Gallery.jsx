import React from 'react'

import {community} from './data'

function Gallery() {
    return (
    <div className="gallery">
                <p className="heading-sub" style={{visibility: "hidden"}}>Our Gallery</p>
                <h2 className="heading-secondary">Our Gallery</h2>
                <div className="gallery">
                <div className="gallery-grid">
                {
                    community.map((item,index)=>{
                        return(
                    <div className="gallery-item" key={index}>
                        <img
                            alt="gallery"
                            className="gallery-img"
                            src={item.img}
                        />
                    </div>
                        )
                    })
                }
                </div>
                </div>
            </div>
    )
}

export default Gallery
