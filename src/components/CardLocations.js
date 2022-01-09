export default function CardLocations(props) {
  const { name, dimension, type, residents } = props.props
  return (
    <div className="Card_locations">
      <div>
        <span>Locations</span>
        <h2>{name}</h2>
        <span>Type Locations</span>
        <h3>{type}</h3>
        <span>Dimension</span>
        <p>{dimension}</p>
      </div>
      <button>Residents</button>
    </div>
  )
}
