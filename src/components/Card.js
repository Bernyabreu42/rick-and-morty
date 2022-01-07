import style from '../../style/Card.module.css';

export default function Card(props) {
  const { name, image, species, status, gender, location, origin, episode, created } = props.props;


  return (
    <div className={style.card}>
      <div className={style.status} >
        <div className={style.status_icon}></div>
        <span>{status}</span>
        <span> - {species}</span>
      </div>
      <img src={image} alt="" draggable="false" loading='lazy' />
      <div className={style.card_body}>
        <h3>{name}</h3>
        <br />
        <div>
          <h3>Last known location: </h3>
          <h4>{location.name}</h4>
        </div>
        <div>
          <h3>First seen in: </h3>
          <h4>algun sitio</h4>
        </div>
      </div>

    </div>
  )
}
