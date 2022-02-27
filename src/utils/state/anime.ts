import { atom } from "recoil";
import { AnimeData } from "../interface";


export const lastestAnime = atom<AnimeData[]>({
    key: 'lastestAnime',
    default: [],
});


export const CurrentAnime = atom<AnimeData | null>({
    key: 'CurrentAnime',
    default: null
});

export const searchAnime = atom<AnimeData[] | undefined>({
    key: 'searchAnime',
    default: undefined
});