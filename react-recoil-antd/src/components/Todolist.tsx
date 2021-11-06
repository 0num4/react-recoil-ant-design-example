import { useRecoilValue } from "recoil"
import todoAtomState from "../todoatom"

const TodoList = () => {
    const todo = useRecoilValue<string>(todoAtomState);
    return (
        <>
            <span style={{ display: "block"}}>{todo}</span>
        </>
    )
}
export default TodoList;