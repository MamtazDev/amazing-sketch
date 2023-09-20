import React from 'react'
import { Header } from '../header/Header'
import { UploadImage } from '../uploadimage/UploadImage'

const Home = () => {
    return (
        <div className='bg_color'>
            <Header />
            <UploadImage />
        </div>
    )
}

export default Home