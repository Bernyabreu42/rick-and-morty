const url = "https://rickandmortyapi.com/api/location";
export default function GetLocations() {
  const getData = async (url) => {
    let res = await fetch(url);

    try {
      if (!(res.status === 200)) {
        throw ({
          err: !res.statusText ? "Ha ocurrido un error" : res.statusText,
          status: res.status
        });
      }

      let { info, results } = await res.json();

      let respuesta = await fetch(info.next);
      let nextPage = await respuesta.json();

      return { info, results, nextPage }
    } catch (err) {
      console.error(err);
    }
  }
  return getData(url);
}
