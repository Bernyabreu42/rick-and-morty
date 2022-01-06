import style from '../../style/Navbar.module.css'
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={style.nav} >
      <div className={style.navbar} >
        <div className={style.logo} >
          <img src="/images/logo.png" alt="Logo rick and morty" draggable="false" />
        </div>
        <div className={style.navegacion}>
          <Link href={""}><a>characters</a></Link>
          <Link href={""}><a>locations</a></Link>
          <Link href={""}><a>episodes</a></Link>
        </div>
      </div>
    </div>
  )
}
