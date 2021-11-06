import { atom } from "recoil";

const todoAtomState = atom<string>({
    key: "todoAtom",
    default: "",
});

export default todoAtomState;