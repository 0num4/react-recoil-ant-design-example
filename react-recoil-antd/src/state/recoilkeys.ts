// recoilのkeyは一意である必要があるのでここで管理する

export enum RecoilAtomKeys {
    LOGIN_STATE = "loginstate",
    CITY_STATE = "citystate",
    TODO_DISPLAY_STATE = "tododisplaystate"
}

export enum RecoilSelectorKeys {
    TODO_DISPLAY_SELECTOR = "tododisplayselector",
    WEATHER_SELECTOR = "weatherselector"
}