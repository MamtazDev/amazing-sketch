import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './UploadImage.css';
import dragIcon from '../../assets/images/drag.svg';
import { useDropzone } from 'react-dropzone';
import { AiOutlineClose } from "react-icons/ai";
import ImageStyles from '../imageStyles/ImageStyles';
import SelectStyle from '../selectStyle/SelectStyle';
import Loader from '../../assets/images/loader.gif'

const imgThumbnail = {
    width: 195,
    height: 195,
}

const colseBtn = {
    top: 10,
    right: 10
}

export const UploadImage = () => {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        accept: {
            'image/*': [],
        },
        onDrop: async (acceptedFiles) => {
            setIsLoading(true);
            // Simulate a delay of 2 seconds
            setTimeout(() => {
                setFiles(
                    acceptedFiles.map((file) =>
                        Object.assign(file, {
                            preview: URL.createObjectURL(file),
                        })
                    )
                );
                setIsLoading(false);
            }, 2000);
        },
    });

    const thumbs = files.map((file, index) => (
        <div key={file.name}>
            <div className='d-flex'>
                <div style={imgThumbnail} className='position-relative overflow-hidden'>
                    <img src={file.preview} onLoad={() => URL.revokeObjectURL(file.preview)} />
                    <button onClick={() => removeFile(index)} className="close-button position-absolute border-0 bg-black text-white py-1 px-2 rounded-3" style={colseBtn}>
                        <AiOutlineClose />
                    </button>
                </div>

                <div className="file-info ms-3">
                    <div className='fs-15 fw-normal text-black31 mb-2'>{file.name}</div>
                    <ul className='p-0'>
                        {acceptedFiles.map(file => (
                            <li className='fs-15 fw-normal text-black31' key={file.path}>
                                <p className='fs-15 fw-normal text-black31 mt-1'>{bytesToKB(file.size)} KB</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);

    function bytesToKB(bytes) {
        return (bytes / 1024).toFixed(2);
    }

    const removeFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    return (
        <section id='upload_image'>
            <Container>
                <Row>
                    <div className='upload_image_container'>
                        <div className="seciton_heading mb-30">
                            <h2 className='text-black fs-18 text-center'>Upload Image</h2>
                        </div>

                        <div className='drag_and_drop d-flex flex-wrap justify-content-center gap-5 pb-lg-5'>
                            <div className='drop_image p-4'>
                                <div className='text-center' {...getRootProps()}>
                                    <img src={dragIcon} className='mb-3' alt='icon' />
                                    <h6 className='fs-15 fw-medium text-black mb-3'>Drag & Drop</h6>
                                    <p className='fs-12 text-black fw-normal mb-3'>or</p>
                                </div>
                                <div className="file-input text-center">
                                    <input
                                        type="file"
                                        name="file-input"
                                        id="file-input"
                                        className="file-input__input"
                                        {...getInputProps()}
                                    />
                                    <label className="file-input__label" htmlFor="file-input">
                                        <span>Browse Files</span>
                                    </label>
                                </div>
                            </div>
                            <aside>
                                {thumbs}
                            </aside>
                        </div>

                        {isLoading ? (
                            <div className="loader text-center">
                                <img src={Loader} style={{ width: '374px' }} alt="loader" />
                                <h2 className='fs-25 fw-bold text-black mb-4'>
                                    Your Images are being generated!
                                </h2>
                                <p className='fs-18 fw-medium text-black6c'>
                                    Pls wait for a moment
                                </p>
                            </div>
                        ) : (
                            files.length > 0 ? <SelectStyle /> : <ImageStyles />
                        )}
                    </div>
                </Row>
            </Container>
        </section>
    );
};
