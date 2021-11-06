import { selector } from "recoil";
import todoAtomState from "../todoatomstate";
import TodoList from "../components/Todolist";


export const seachedTodoListSelector = selector<string>({
    key: "testselector",
    get: ({get}) => {
        const todo = get(todoAtomState);
        return `selected ${todo} selected`
    }
})