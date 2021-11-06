import { useSetRecoilState } from "recoil";
import todoAtomState from "../todoatom";

const InputForm = () => {
    const setTodo = useSetRecoilState<string>(todoAtomState);
    return (
      <>
        <input onChange={(val) => setTodo(val.target.value)}></input>
      </>
    )
  }
  
  export default InputForm;