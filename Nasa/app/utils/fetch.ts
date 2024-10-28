
const API_KEY = 'z2mJfGiFM3Auf7XscJjEgjY1vyDUdirO2CMHB6bB';
const API_URL = 'https://api.nasa.gov/planetary/apod';

// El parámetro de async es opcional. Para eso es el '?'
export default async (urlParams?: string) => {
    try{

        // Esta función hará que las peticiones a la API sea más sencilla. 
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}${
                typeof urlParams !== 'undefined' && urlParams?.length>0 ? urlParams : ''}`,
        );

        // Para convertir la respuesta a formato JSON:
        const data = await response.json();

        return Promise.resolve(data);

    }catch(error){
        return Promise.reject(error);
    }
};