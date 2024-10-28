// Guardaremos todos los tipos que pueden ser utilizados dentro de la respuesta
// por ejemplo, de la API. Pondremos los tipos opcionales. (o string o indefinidos)
export type PostImage = {
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title?: string;
    url?: string;
};