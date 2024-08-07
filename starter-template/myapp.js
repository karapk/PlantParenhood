import {useState, useEffect} from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
// import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import '../styles/globals.css';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Footer />,
//     children: [
//       { path: "", element: <Home />},
      
//     ]
//   },
  
// ])

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
