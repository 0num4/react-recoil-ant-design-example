import { useSetRecoilState } from "recoil";
import todoAtomState from "../state/todoatomstate";

const InputForm = () => {
    const setTodo = useSetRecoilState<string>(todoAtomState);
    return (
      <>
        <input onChange={(val) => setTodo(val.target.value)}></input>
      </>
    )
  }
  
  export default InputForm;