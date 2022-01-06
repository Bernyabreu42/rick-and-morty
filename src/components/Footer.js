import style from '../../style/Footer.module.css'
import Link from "next/link"

export default function Footer() {
  return (
    <div className={style.footer}>
      <Link href={"https://github.com/Bernyabreu42"}>
        <a>Berny Abreu</a>
      </Link>
      <p>&copy;  All right Reserverd <span>2021 - {new Date().getFullYear()}</span></p>
    </div>
  )
}
