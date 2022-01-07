import styleLocal from '../../style/Card.module.css';
import Charter from '../pages/characters/[id]';
import { useRouter } from 'next/router'


export default function Card(props) {
  const { id, name, image, species, status } = props.props;

  const router = useRouter();

  return (

    <div className={styleLocal.card}>
      <img onClick={() => router.push(`/characters/${id}`)} src={image} alt="" draggable="false" loading='lazy' />
      <div className={styleLocal.card_body}>
        <h3>{name}</h3>
        <br />
      </div>
    </div>

  )


}
