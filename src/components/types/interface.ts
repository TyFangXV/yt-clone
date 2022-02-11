

export interface ICoverImage{
    image_url: string;
    large_image_url: string;
    small_image_url : string
}

export interface IAnime{
    mal_id : string,
    content : string,
    title : string,
    url : string,
    image : ICoverImage,
}