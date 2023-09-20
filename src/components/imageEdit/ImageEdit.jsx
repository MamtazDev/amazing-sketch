import React from 'react'
import { Header } from '../header/Header'
import './ImageEdit.css'
import previewImage from '../../assets/images/preview-image.svg'

const ImageEdit = () => {
    return (
        <section id='image_edit' className='bg_color'>
            <Header />

            <div className="container">

                <div className='wrapper_container bg-white'>
                    <div className="row">
                        <div className="col-lg-4">
                            123122
                        </div>
                        <div className="col-lg-8">
                            <div className="preview_image">
                                <img src={previewImage} alt="preview" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ImageEdit