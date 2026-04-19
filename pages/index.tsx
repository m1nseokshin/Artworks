import Head from 'next/head';
import Link from 'next/link'; // 1. Link 컴포넌트 추가
import React from 'react';

// @ts-ignore
import Main from '@/public/video/main.mp4';

export default function Home() {
  // 이제 클릭 시 이동하므로 기존의 Lightbox 관련 상태(open)는 필요 없습니다.

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='main-container'>
        {/* 2. 기존의 onClick 이벤트를 제거하고 Link로 감싸서 이동하도록 수정 */}
        <Link href="/artworks" className='main-link' style={{ textDecoration: 'none' }}>
          <video 
            loop={true} 
            autoPlay={true} 
            muted 
            playsInline 
            poster='/3dartworks/0.jpg' 
            className="main" 
            src={ Main }
          ></video>
          <div className='main-title'>MINSEOK SHIN PRESENTS.</div>
        </Link>
      </div>
    </>
  )
}