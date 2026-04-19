import '@/styles/globals.css'
import Navbar from "./navbar"
import Footerbar from './footerbar';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function App({ Component, pageProps }: AppProps) {
  
useEffect(() => {
  const lenis = new Lenis({
    // 1. duration: 숫자가 작을수록 스크롤이 빨리 끝납니다 (기존 1.2 -> 0.8~1.0 추천)
    duration: 0.2, 
    
    // 2. easing: 가속도 그래프입니다. 
    // 아래 함수는 초반에 더 탄력 있게 움직이는 'easeOutQuart' 스타일입니다.
    easing: (t) => 1 - Math.pow(1 - t, 4), 
    
    // 3. touchMultiplier: 모바일/터치 패드에서 스크롤 민감도 (기본값 2)
    touchMultiplier: 1.5,
    
    // 4. lerp: 관성 정도 (0~1 사이, 작을수록 더 쫀득하게 따라옵니다)
    // lerp: 0.02, 
    
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps}/>
      <Footerbar/>
    </>
  )
}