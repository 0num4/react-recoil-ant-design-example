import { useRecoilValue } from "recoil"
import todoAtomState from "../state/todoatomstate"
import { seachedTodoListSelector } from "../selectors/searchlistselector";

const TodoList = () => {
    const todo = useRecoilValue<string>(seachedTodoListSelector);
    return (
        <>
            <span style={{ display: "block"}}>{todo}</span>
        </>
    )
}
export default TodoList;