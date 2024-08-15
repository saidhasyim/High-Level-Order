
import { atom, type WritableAtom } from "nanostores";

export const user$ = atom<string[]>([])
user$.set("data fetched");

