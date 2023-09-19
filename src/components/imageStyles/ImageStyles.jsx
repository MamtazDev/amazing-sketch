import React from 'react'
import './ImageStyles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg1 from '../../assets/images/slider1.svg'
import sliderImg2 from '../../assets/images/slider2.svg'
import sliderImg3 from '../../assets/images/slider3.svg'
import sliderImg4 from '../../assets/images/slider4.svg'
import sliderImg5 from '../../assets/images/slider5.svg'
import sliderImg6 from '../../assets/images/slider6.svg'
import sliderImg7 from '../../assets/images/slider7.svg'
import sliderImg8 from '../../assets/images/slider8.svg'
import sliderImg9 from '../../assets/images/slider9.svg'
import sliderImg10 from '../../assets/images/slider10.svg'
import sliderImg11 from '../../assets/images/slider11.svg'
import sliderImg12 from '../../assets/images/slider12.svg'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const ImageStyles = () => {
    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button className='nextBtn' onClick={onClick}>
                <GrFormNext />
            </button>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button className='prevBtn' onClick={onClick}>
                <GrFormPrevious />
            </button>
        );
    }

    const settings = {
        // className: "center",
        infinite: true,
        slidesToShow: 3,
        // speed: 500,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 2000,
        rows: 2,
        slidesPerRow: 2,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const SliderInfo = [
        {
            sliderImg: sliderImg1,
            sliderName: 'Gothic',
            slidername2: 'Architecture'
        },
        {
            sliderImg: sliderImg2,
            sliderName: 'Pop',
            slidername2: 'Cubism'
        },
        {
            sliderImg: sliderImg3,
            sliderName: 'Impressionist',
            slidername2: 'Beach'
        },
        {
            sliderImg: sliderImg4,
            sliderName: 'neoclassic',
            slidername2: 'fountain'
        },
        {
            sliderImg: sliderImg5,
            sliderName: 'post-impressionist',
            slidername2: 'haystacks'
        },
        {
            sliderImg: sliderImg6,
            sliderName: 'realist',
            slidername2: 'pears'
        },
        {
            sliderImg: sliderImg7,
            sliderName: 'renaissance',
            slidername2: 'monks'
        },
        {
            sliderImg: sliderImg8,
            sliderName: 'surrealist',
            slidername2: 'astrology'
        },
        {
            sliderImg: sliderImg9,
            sliderName: 'surrealist',
            slidername2: 'forest'
        },
        {
            sliderImg: sliderImg10,
            sliderName: 'abstract',
            slidername2: 'expressionist'
        },
        {
            sliderImg: sliderImg11,
            sliderName: 'baroque',
            slidername2: 'marketplace'
        },
        {
            sliderImg: sliderImg12,
            sliderName: 'romantic',
            slidername2: 'pasture'
        },
        {
            sliderImg: sliderImg1,
            sliderName: 'Gothic',
            slidername2: 'Architecture'
        },
        {
            sliderImg: sliderImg2,
            sliderName: 'Pop',
            slidername2: 'Cubism'
        },
        {
            sliderImg: sliderImg3,
            sliderName: 'Impressionist',
            slidername2: 'Beach'
        },
        {
            sliderImg: sliderImg4,
            sliderName: 'neoclassic',
            slidername2: 'fountain'
        }
    ]
    return (
        <>
            <div className='section_heading border-top py-4'>
                <h2 className='text-black fw-medium fs-18 text-center'>
                    Image Styles
                </h2>
            </div>

            <div className='imageStyles_slider pb-5'>
                <div>
                    <Slider {...settings}>
                        {/* <button type="button" data-role="none" class="slick-arrow slick-prev" style="display: block;"> Previous</button> */}
                        {
                            SliderInfo.map((sliderItem, index) => (
                                <div className='slider-item' key={index}>
                                    <img src={sliderItem.sliderImg} alt="slider-img" />
                                    <h5 className='fs-15 fw-medium text-capitalize text-black'>
                                        {sliderItem.sliderName}
                                    </h5>
                                    <h5 className='fs-15 fw-medium text-capitalize text-black'>
                                        {sliderItem.slidername2}
                                    </h5>
                                </div>
                            ))
                        }
                        {/* <button type="button" data-role="none" class="slick-arrow slick-next" style="display: block;"> Next</button> */}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ImageStyles