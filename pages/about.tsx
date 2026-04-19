import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//이미지 파일 임포트
import About from '@/public/image/profile.png';
import Link_01 from '@/public/image/mail.svg';
import Link_02 from '@/public/image/github.svg';
export default function Home() {

  
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <div className='about'>
          <div className='about-text'>
            <div className='title-left'>PROFILE</div>
            <div className='subtitle-left'>
              <h2>Minseok Shin</h2>
              Pusan National Univ. Design and Technology<br />
              Korea Design Membership Plus 7<br />
              Interests: HCI, Universal Design, Web Development<br />
              <br />
            </div>
            <div className='contact'>
              <div className='subtitle-left'>CONTACTS</div>
              <div className='imgs'>
                <Link className='img' href="mailto: m1nseokdesign@gmail.com"><Image src={ Link_01 } alt='G-MAIL'></Image></Link>
                <Link className='img' href='https://github.com/m1nseokshin'><Image src={ Link_02 } alt='G-MAIL'></Image></Link>

              </div>
            </div>
            <Link className='web-link' href='https://m1nseokshin.github.io'>WEB PORTFOLIO </Link>
          </div>
          <div className='about-img'><Image src={ About } alt='Minseok Shin' priority></Image></div>
        </div>
      </>

    </>
  )
}
