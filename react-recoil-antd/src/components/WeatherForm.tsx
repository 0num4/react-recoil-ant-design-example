import React from "react";
import { useSetRecoilState} from "recoil";
import { cityIdState } from "../state/cityatomstate";
import { cities, CityId } from "../utils/cities";

const WeatherComponent: React.FC = ()=>{
    const weatherState = useSetRecoilState<CityId | undefined>(cityIdState);
    const submit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        // weatherState()
        // return (
        //     <>
        //     </>
        // )
    }

    const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.currentTarget.value as CityId;
        weatherState(id);
      };
    
    return (
        <>
            <form onSubmit={submit}>
            <select onChange={changeCity}>
                <option value="">選択なし</option>
                {cities.map((city) => (
                <option value={city.id} key={city.id}>
                    {city.name}
                </option>
                ))}
            </select>
            <button type="submit">submit</button>
            </form>
        </>
    )
}
export default WeatherComponent;