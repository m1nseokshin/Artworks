import Head from 'next/head';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from 'react';

// @ts-ignore
import Main from '@/public/video/main.mp4';

export default function Home() {
  const [open, setOpen] = React.useState(false);

  
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='main-container'>
        <div  className='main-link' onClick={() => setOpen(true)}>
          <video loop={true} autoPlay={true} muted playsInline poster='/3dartworks/0.png' className="main" src={ Main }></video>
          <div className='main-title'>MINSEOK SHIN PRESENTS.</div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: "/3dartworks/0.jpg" }, { src: "/3dartworks/1.jpg" }, { src: "/3dartworks/2.jpg" }, { src: "/3dartworks/3.jpg" }, { src: "/3dartworks/4.jpg" }, { src: "/3dartworks/5.jpg" }, { src: "/3dartworks/6.jpg" }, { src: "/3dartworks/7.jpg" }, { src: "/3dartworks/8.jpg" }, { src: "/3dartworks/9.jpg" }, { src: "/3dartworks/10.jpg" }, { src: "/3dartworks/11.jpg" }]}
      />

    </>
  )
}
