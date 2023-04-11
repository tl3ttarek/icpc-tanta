import React from 'react'

import '../../styles/global.css'

import Team from './Team'
import Gallery from './Gallery'

function GallerySection() {

    return (
        <section className='section-gallery'>
            <div className="container grid grid--2-col">
                <Team/>
                <Gallery/>
            </div>
        </section>
    )
}

export default GallerySection
