import React, { FormEvent } from "react";
import { useSetRecoilState} from "recoil";
import { cityIdState } from "../state/cityatomstate";
import { cities, CityId } from "../utils/cities";
import { Select, Button } from 'antd'
import { SelectValue } from "antd/lib/select";

const WeatherComponent: React.FC = ()=>{
    const weatherState = useSetRecoilState<CityId | undefined>(cityIdState);
    const submit = (e: FormEvent<HTMLFormElement>) =>{
        // if(!e) return
        e.preventDefault();
        // weatherState()
        // return (
        //     <>
        //     </>
        // )
    }

    const changeCity = (e: SelectValue) => {
        // const id = e.currentTarget.value as CityId;
        weatherState(e as CityId);
      };
    
    return (
        <>
            <form onSubmit={submit}>
            <Select onChange={changeCity} style={{width:120, marginRight:10}}>
                <option value="">選択なし</option>
                {cities.map((city) => (
                <option value={city.id} key={city.id}>
                    {city.name}
                </option>
                ))}
            </Select>
            <Button type="primary"  htmlType="submit">submit</Button>
            </form>
        </>
    )
}
export default WeatherComponent;