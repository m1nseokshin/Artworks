import Head from 'next/head';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React, { useState } from 'react'; // useState 추가

//이미지 파일 임포트
import Img00 from '../public/3dartworks/0.jpg';
import Img02 from '../public/3dartworks/2.jpg';
import Img03 from '../public/3dartworks/3.jpg';
import Img04 from '../public/3dartworks/4.jpg';
import Img05 from '../public/3dartworks/5.jpg';
import Img06 from '../public/3dartworks/6.jpg';

export default function Artowrks() {
  // 1. 상태 관리: 열림 여부(open)와 클릭한 이미지의 번호(index)
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 2. 이미지 데이터 배열화 (관리하기 편하게 만듭니다)
  const images = [
    { src: "/3dartworks/0.jpg", staticSrc: Img00 },
    { src: "/3dartworks/2.jpg", staticSrc: Img02 },
    { src: "/3dartworks/3.jpg", staticSrc: Img03 },
    { src: "/3dartworks/4.jpg", staticSrc: Img04 },
    { src: "/3dartworks/5.jpg", staticSrc: Img05 },
    { src: "/3dartworks/6.jpg", staticSrc: Img06 },
  ];

  return (
    <>
      <Head>
        <title>Artworks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='artworks-container'>
        {images.map((img, i) => (
          <Image 
            key={i}
            className='artworks-item' 
            src={img.staticSrc} 
            alt='madebyminseokshin'
            // 3. 클릭 시 해당 인덱스를 저장하고 라이트박스 열기
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            style={{ cursor: 'pointer' }} // 클릭 가능함을 표시
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index} // 4. 현재 몇 번째 이미지인지 전달
        slides={images.map(img => ({ src: img.src }))} // 슬라이드 목록 전달
      />
    </>
  )
}