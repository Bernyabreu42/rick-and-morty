import style from '../../style/Card.module.css';

export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.status} >
        <div className={style.status_icon}></div>
        <span>Status_life</span>
        <span>Status_sex</span>
      </div>
      <img src="images/random.jpg" alt="" draggable="false" />
      <div className={style.card_body}>
        <h3>NOMBRE DEL PERSONAJE</h3>
        <br />
        <div>
          <h3>Last known location: </h3>
          <h4>response</h4>
        </div>
        <div>
          <h3>First seen in: </h3>
          <h4>response</h4>
        </div>
      </div>

    </div>
  )
}
