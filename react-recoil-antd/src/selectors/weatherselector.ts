import { readOnlySelector, ReadOnlySelectorOptions , selector, useRecoilValue, GetRecoilValue } from "recoil";
import { RecoilSelectorKeys } from "../state/recoilkeys";
import axios from "axios";
import { CityId } from "../utils/cities";
import { cityIdState } from "../state/cityatomstate";
import { CurrentWeather } from "../model/currentweather";

console.log('process.env.REACT_APP_OPEN_WEATHER_API_KEY');
console.log(process.env.REACT_APP_OPEN_WEATHER_API_KEY);

const readonlyselectoroptions: ReadOnlySelectorOptions<any> = {
    key: RecoilSelectorKeys.WEATHER_SELECTOR,
    get: async ({get})=>{
        const cityId: CityId = get(cityIdState);
        console.log(cityId);
        if (!cityId) {
            return;
        }
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&lang=ja&units=metric`
        )
        console.log(res)
        return res.data
    }
}
// TODO: ここの<>情報に入るのは引数？なのか返り血なのか？引数ってある？stateだけな気がする。
export const weatherSelector = selector<CurrentWeather>(readonlyselectoroptions)