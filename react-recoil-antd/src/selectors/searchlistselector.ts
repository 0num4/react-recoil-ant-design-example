import { selector } from "recoil";
import todoAtomState from "../state/todoatomstate";
import TodoList from "../components/Todolist";
import { RecoilSelectorKeys } from "../state/recoilkeys";


export const seachedTodoListSelector = selector<string>({
    key: RecoilSelectorKeys.TODO_DISPLAY_SELECTOR,
    get: ({get}) => {
        const todo = get(todoAtomState);
        return `selected ${todo} selected`
    }
})