import style from '../../style/Navbar.module.css'
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={style.nav} >
      <div className={style.navbar} >
        <div className={style.logo} >
          <Link href="/">
            <a >
              <img src="/images/logo.png" alt="Logo rick and morty" draggable="false" />
            </a>
          </Link>
        </div>
        <div className={style.navegacion}>
          <Link href={"/page"}><a>characters</a></Link>
          <Link href={"/locations"}><a>locations</a></Link>
          <Link href={"/episodes"}><a>episodes</a></Link>
        </div>
      </div>
    </div>
  )
}
