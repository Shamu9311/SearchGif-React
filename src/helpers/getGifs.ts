export const getGifs = async ( category : any ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qfTZk45Ly4lx8S3RsV4dRKC6LYptapFR&q=${category}&limit=10`;
    const resp =  await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( (img:any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}