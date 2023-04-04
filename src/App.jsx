import { Link } from "react-router-dom";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/actions/counter";
const App = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Tao test</h1>
      <Link to="/login">
        <Button>Go to login</Button>
      </Link>

      <h1>Counter: {counter}</h1>
      <Button onClick={() => dispatch(increment(5))}>Increment couter</Button>
      <Button onClick={() => dispatch(decrement(5))}>Decrement couter</Button>
    </div>
  );
};

export default App;
