import Image from 'next/image'
import styles from "@/styles/footerbar.module.css"

export default function Footerbar() {
  return (
    <>
    <div className={styles.footercontainer}>
      <div className={styles.footertext}>본 페이지는 포트폴리오 용도로 제작되었습니다. 작업물의 무단 배포를 금합니다.</div>
      <div className={styles.copyright}>© 2023 by Minseok Shin.</div>
    </div>
    </>
  )
}
