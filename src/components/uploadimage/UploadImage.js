import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './UploadImage.css'
import dragIcon from '../../assets/images/drag.svg'

export const UploadImage = () => {
    return (
        <section id='upload_image'>
            <Container>
                <Row>
                    <div className='upload_image_container'>
                        <div className="seciton_heading mb-30">
                            <h2 className='text-black fs-18 text-center'>
                                Upload Image
                            </h2>
                        </div>

                        <div className='drag_and_drop d-flex justify-content-center'>
                            <div className='drop_image'>
                                <div className='drop_image_wrapper text-center'>
                                    <img src={dragIcon} className='mb-3' alt='icon' />
                                    <h6 className='fs-15 fw-medium text-black mb-3'>Drag & Drop</h6>
                                    <p className='fs-12 text-black fw-normal mb-3'>or</p>
                                    <div class="file-input">
                                        <input
                                            type="file"
                                            name="file-input"
                                            id="file-input"
                                            class="file-input__input"
                                        />
                                        <label class="file-input__label" for="file-input">

                                            <span>Browse Files</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </section>
    )
}
