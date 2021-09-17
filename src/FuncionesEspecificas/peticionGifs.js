//Peticion a la API

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=F2EXDfVI05RuszA01CNcBhzaENihKwlU`;
    const resp = await fetch( url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium
        }
    })
    
    return gifs;
}