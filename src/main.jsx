import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import ImageEdit from './components/imageEdit/ImageEdit.jsx';
import ContactUs from './components/contactUs/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/about',
    element: <About />
  },

  {
    path: '/image-edit',
    element: <ImageEdit />
  },

  {
    path: '/contact-us',
    element: <ContactUs />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
