export interface PostRecieved {
    title: Title;
    author: string;
    date: string;
    featured_media: string;
    _embedded: Embedded;
    link: string;
}

export interface Post {
    title: string;
    author: string;
    date: string;
    img: string;
    postLink: string;
    authorLink: string;
}
  
export interface Embedded {
    author: Autor[];
}
  
export interface Autor {
    link: string;
    name: string;
}
  
export interface Title {
    rendered: string;
}