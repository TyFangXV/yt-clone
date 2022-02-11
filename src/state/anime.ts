import { atom } from "recoil";
import { IAnime } from "../components/types/interface";


export const lastestAnime = atom<IAnime[]>({
    key: 'lastestAnime',
    default: [],
});
