import styleLocal from '../../style/Card.module.css';
import Charter from '../pages/characters/[id]';
import { useRouter } from 'next/router'


export default function Card(props) {
  const { id, name, image, species, status, gender, location, origin, episode, created } = props.props;

  const router = useRouter();

  return (

    <div className={styleLocal.card}>
      <div className={styleLocal.status} >
        <div className={styleLocal.status_icon} style={{ background: status === "Alive" ? "#31a200" : (status === "Dead") ? '#f00' : '#bbb' }} ></div>
        <span>{status}</span>
        <span> - {species}</span>
      </div>
      <img onClick={() => router.push(`/characters/${id}`)} src={image} alt="" draggable="false" loading='lazy' />
      <div className={styleLocal.card_body}>
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
