import { atom } from "recoil";
import { RecoilAtomKeys } from "./recoilkeys";

const todoAtomState = atom<string>({
    key: RecoilAtomKeys.TODO_DISPLAY_STATE,
    default: "",
});

export default todoAtomState;