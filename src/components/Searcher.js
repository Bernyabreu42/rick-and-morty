import { useRouter } from "next/router";

export default function Searcher(props) {
  const { id, image, name } = props.props;
  const router = useRouter();

  return (
    <div className="search_element"
      onClick={() => router.push(`/characters/${id}`)}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  )
}
