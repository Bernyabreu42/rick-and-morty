import style from '../../style/OnlyCharter.module.css'

export default function OnlyCharacter(props) {
  const { name, image, species, status, gender, location, origin, episode, error } = props.props;

  if (typeof error === "string") {
    return (
      <span>Loading...</span>
    )
  } else {
    return (
      <>
        <div className={style.full_card}>
          <img src={image} alt={name} draggable="false" />
          <div className={style.info_character}>
            <h1>{name}</h1>
            <div className={style.status}>
              <div className={style.status_icon}
                style={{ background: status === "Alive" ? "#31a200" : (status === "Dead") ? '#f00' : '#bbb' }} ></div>
              <span>{status} - {species}</span>
            </div>
            <br />
            <h2>Genger</h2>
            <p>{gender}</p>
            <h2>Origin</h2>
            <p>{origin.name}</p>
            <h2>Last known location</h2>
            <p>{location.name}</p>
            <h2>Aparitions</h2>
            <p>{episode.length}</p>
          </div>
        </div>
      </>

    )
  }




}
