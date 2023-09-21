import React, { useState } from 'react'
import { Header } from '../header/Header'
import './ImageEdit.css'
import previewImage from '../../assets/images/preview-image.svg'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import Select from 'react-select'
import { GrRotateRight, GrRotateLeft } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const options = [
    { value: 'PNG ', label: 'PNG ' },
    { value: 'JPEG', label: 'JPEG' },
    { value: 'GIF', label: 'GIF' }
]

const options1 = [
    { value: 'Horizontal ', label: 'Horizontal' },
    { value: 'Potrait', label: 'Potrait' },
]

const rotateStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
}

const imageRoationCss = {
    width: '900',
    height: '700',
    overflow: 'hidden'
}

const imageSizeBtn = [
    {
        size: "3'8'' X 2'2''",
        price: "$50.00"
    },
    {
        size: "1'8'' X 12''",
        price: "$25.00"
    },
    {
        size: "9’8’’ X 3’2’’",
        price: "$30.00"
    },
    {
        size: "7’8’’ X 4’2’’",
        price: "$20.00"
    },
    {
        size: "15’8’’ X 6’2’’",
        price: "$100.00"
    },
    {
        size: "5’8’’ X 3’2’’",
        price: "$11.00"
    },
    {
        size: "8’8’’ X 1’2’’",
        price: "$20.00"
    },
    {
        size: "15’8’’ X 1’2’’",
        price: "$10.00"
    },
]

const ImageEdit = () => {
    let navigate = useNavigate()
    const [rotation, setRotation] = useState(0);
    const [saveContinue, setSaveContinue] = useState(false);
    const [previous, setPrevious] = useState(false)

    const rotateLeft = () => {
        setRotation(prevRotation => prevRotation - 90);
    };

    const rotateRight = () => {
        setRotation(prevRotation => prevRotation + 90);
    };

    const handleSaveContinue = () => {
        setSaveContinue(true)
        setPrevious(saveContinue)
    }

    const handlePrevBtn = () => {
        setSaveContinue(previous)
    }

    return (
        <section id='image_edit' className='bg_color'>
            <Header />
            <div className="container">
                <div className='wrapper_container bg-white'>
                    <div className="pb-4">
                        {
                            !saveContinue ? (
                                <button className='border-0 bg-transparent d-flex align-items-center gap-2 fs-18 fw-medium text-black' onClick={() => navigate(-1)}>
                                    <span>
                                        <IoIosArrowBack />
                                    </span>
                                    Back
                                </button>

                            ) : (
                                <button className='border-0 bg-transparent d-flex align-items-center gap-2 fs-18 fw-medium text-black' onClick={handlePrevBtn}>
                                    <span>
                                        <IoIosArrowBack />
                                    </span>
                                    Back
                                </button>
                            )
                        }

                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            {
                                !saveContinue ? (
                                    <div className="image_settings">
                                        <div className='impression_potrait mb-5'>
                                            <h3 className='text-black fw-medium fs-18 mb-4'>
                                                impressionist portrait
                                            </h3>
                                            <div className="potrait_position">
                                                <button className='btn-1 border-0 text-white px-3 py-2'>Digital Image</button>
                                                <button className='bg-white border-0 px-3 py-2' style={{ color: '#a9a9a9' }}>Image On Canvas</button>
                                            </div>
                                        </div>

                                        <div className='image_format mb-5'>
                                            <h3 className='text-black fw-medium fs-18 mb-4'>
                                                Image Format
                                            </h3>
                                            <div className="image_format_option">
                                                <Select options={options}
                                                    placeholder={"Select Format"}
                                                    styles={{
                                                        placeholder: (baseStyles) => ({
                                                            ...baseStyles,
                                                            fontSize: "12px",
                                                            fontWeight: "500",
                                                            color: "#313131",
                                                        }),
                                                        control: (baseStyles) => ({
                                                            ...baseStyles,
                                                            border: "1px solid #000",
                                                            borderRadius: "10px",
                                                            padding: "7px 8px",
                                                            outlineColor: "none",
                                                        }),

                                                        indicatorSeparator: (baseStyles) => ({
                                                            ...baseStyles,
                                                            border: "0",
                                                            backgroundColor: "white"
                                                        }),

                                                        ValueContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            fontSize: "10px"

                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="download_format mb-5">
                                            <h3 className='text-black fw-medium fs-18 mb-4'>
                                                Download Format
                                            </h3>

                                            <div className="radio_group">

                                                <form action="#">
                                                    <p className='mb-3'>
                                                        <input type="radio" id="withWaterMark" name="radio-group" defaultChecked />
                                                        <label htmlFor="withWaterMark">With watermark (free)</label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" id="withOutWaterMark" name="radio-group" />
                                                        <label htmlFor="withOutWaterMark">Without watermark ($3.00) </label>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                    (
                                        <div className={`${saveContinue ? "save_continue_function border-end pe-lg-4" : "save_continue_function"}`}>
                                            <div className='impression_potrait mb-5'>
                                                <h3 className='text-black fw-medium fs-18 mb-4'>
                                                    impressionist portrait
                                                </h3>
                                                <div className="potrait_position">
                                                    <button className='bg-white border-0 px-3 py-2' style={{ color: '#a9a9a9' }}>Digital Image</button>
                                                    <button className=' btn-1 border-0 text-white px-3 py-2'>Image On Canvas</button>
                                                </div>
                                            </div>
                                            <div className='select_orientation mb-5'>
                                                <h3 className='text-black fw-medium fs-18 mb-4'>
                                                    Select Orientation
                                                </h3>
                                                <div className="image_format_option">
                                                    <Select options={options1}
                                                        placeholder={"Select Format"}
                                                        styles={{
                                                            placeholder: (baseStyles, state) => ({
                                                                ...baseStyles,
                                                                fontSize: "12px",
                                                                fontWeight: "500",
                                                                color: "#313131",
                                                            }),
                                                            control: (baseStyles) => ({
                                                                ...baseStyles,
                                                                border: "1px solid #000",
                                                                borderRadius: "10px",
                                                                padding: "7px 8px",
                                                                outlineColor: "none",
                                                            }),

                                                            indicatorSeparator: (baseStyles) => ({
                                                                ...baseStyles,
                                                                border: "0",
                                                                backgroundColor: "white"
                                                            }),

                                                            ValueContainer: (baseStyles) => ({
                                                                ...baseStyles,
                                                                fontSize: "10px"

                                                            })
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="select_canvas">
                                                <h3 className='text-black fw-medium fs-18 mb-4'>
                                                    Select Canvas Size
                                                </h3>

                                                <div className="canvas_size d-flex flex-wrap gap-2 gap-lg-5">
                                                    {
                                                        imageSizeBtn.map((sizeBtn, index) => (
                                                            <button className='text-center' key={index} style={{ maxWidth: '145px', width: '100%', height: '90px' }}>
                                                                <p className='fs-15 fw-medium text-black31'>
                                                                    {sizeBtn.size}
                                                                </p>
                                                                <p className='text-gray7b'>
                                                                    {sizeBtn.price}
                                                                </p>
                                                            </button>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>

                        <div className="col-lg-8">
                            <div className={`${saveContinue ? "preview_image_wrapper ps-lg-4" : "preview_image_wrapper border-start ps-lg-4"} `}>
                                <div className="preview_image pb-4 mb-4" style={imageRoationCss}>
                                    <img src={previewImage} className='img-fluid' style={{
                                        transform: `rotate(${rotation}deg)`,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }} alt="preview" />
                                </div>

                                <div className="image_function_btn d-flex flex-wrap justify-content-between gap-4 gap-lg-0">
                                    <div className="rotate_btn d-flex gap-4">
                                        <button onClick={rotateRight} className="right_rotate border-0 bg-whitee4 d-flex align-items-center justify-content-center" style={rotateStyle}>
                                            <GrRotateRight />
                                        </button>

                                        <button onClick={rotateLeft} className="left_rotate border-0 bg-whitee4 d-flex align-items-center justify-content-center" style={rotateStyle}>
                                            <GrRotateLeft />
                                        </button>
                                    </div>

                                    <div className="save_continue_btn">
                                        <button onClick={handleSaveContinue} className='save_continue_btn btn-1 border-0 text-white px-3 py-2'>
                                            Save & Continue <IoIosArrowForward /> <IoIosArrowForward />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ImageEdit