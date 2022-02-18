import { atom } from "recoil";
import { AnimeData, IAnime } from "../utils/interface";


export const lastestAnime = atom<IAnime[]>({
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