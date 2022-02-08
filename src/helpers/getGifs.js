/**
 * Component to request images from the server
 *
 * @param category search criteria
 */
const getGifs = async (category) => {
  const url = `${process.env.REACT_APP_GIPHY_GIFS_LINK}/search?q=${category}&limit=10&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      img: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGifs;
