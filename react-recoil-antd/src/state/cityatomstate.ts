// city情報を保持する

import { atom } from "recoil"
import { CityId } from "../utils/cities"
import { RecoilAtomKeys } from "./recoilkeys"
export const cityIdState = atom<CityId | undefined>({
    key: RecoilAtomKeys.CITY_STATE,
    default: undefined,
})