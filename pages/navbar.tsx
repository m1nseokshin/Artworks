import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

//이미지 파일 임포트
import Instagram from '@/public/image/instagram_logo.svg';


export default function Navbar() {
  const router = useRouter();


  useEffect(() => {
    // DOM 요소를 선택
    const body = document.querySelector('body');
    const hamburgerButton = document.querySelector('.hamburger-button');
    const menuButton = document.querySelector('.menu');
    const overlayMenu = document.querySelector('.overlay-menu');

    // 이벤트 핸들러 함수 정의
    function toggleOverlayMenu() {
      if (overlayMenu) {
        overlayMenu.classList.toggle('visible');
      }
      if (hamburgerButton) {
        hamburgerButton.classList.toggle('active');
      }
      if (body) {
        body.classList.toggle('active');
      }
    }

    // 햄버거 버튼 클릭 이벤트 리스너 추가
    if (hamburgerButton) {
      hamburgerButton.addEventListener('click', toggleOverlayMenu);
    }

    // 메뉴 버튼 클릭 이벤트 리스너 추가
    if (menuButton) {
      menuButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (overlayMenu) {
          overlayMenu.classList.remove('visible');
        }
        if (hamburgerButton) {
          hamburgerButton.classList.remove('active');
        }
        if (body) {
          body.classList.remove('active');
        }
      });
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      if (hamburgerButton) {
        hamburgerButton.removeEventListener('click', toggleOverlayMenu);
      }
      if (menuButton) {
        menuButton.removeEventListener('click', function(event) {
          event.preventDefault();
          if (overlayMenu) {
            overlayMenu.classList.remove('visible');
          }
          if (hamburgerButton) {
            hamburgerButton.classList.remove('active');
          }
          if (body) {
            body.classList.remove('active');
          }
        });
      }
    };
  }, []); // 의존성 배열은 비어 있어야 합니다.


  return (
    <>
      <div className={styles.headercontainer}>
        <div className={styles.headeritem}>
          <Link className={styles.logo} href="/">
            XX_XSTYLES
          </Link>
          <div className={styles.menus}>
            <Link href="/" className={styles.menu}>HOME</Link>
            <Link href="/about" className={styles.menu}>ABOUT</Link>
          </div>
          <Link href="https://www.instagram.com/xx_xstyles">
            <Image className={styles.instagram} src={Instagram} alt="Instagram" priority></Image>
          </Link>
        </div>

        <div className="hamburger-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> 

        <div className="overlay-menu">
          <nav className="menu">
            <a
                  className="menu"
                  onClick={() => router.push('/')}
                >
                  HOME
                </a>
                <a
                  className="menu"
                  onClick={() => router.push('/about')}
                >
                  ABOUT
                </a>
                <a
                  className="menu"
                  onClick={() => router.push('https://www.instagram.com/xx_xstyles')}
                >
                  INSTAGRAM
                </a>
          </nav>
        </div>
      </div>
    </>
  );
}
