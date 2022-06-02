import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { countActions } from "./store/slice/countSlice";
import { RootState } from "./store";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.countSlice.count);

  const increment = () => {
    dispatch(countActions.increase())
  };

  const decrement = () => {
    dispatch(countActions.decrease())
  };

  return (
    <div className="flex flex-col items-center">
      <div>{number}</div>
      <button onClick={()=>increment()}>increment</button>
      <button onClick={()=>decrement()}>decrement</button>
    </div>
  );
}

export default App;
