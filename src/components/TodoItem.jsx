import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { deleteTotoItem } from "../store/actions/todoAction";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = (todoId) => {
    dispatch(deleteTotoItem(todoId));
  };

  return (
    <>
      <Card title={todo.id} style={{ width: "100%" }}>
        <p style={{ color: "red" }}>Title: {todo.title}</p>
        <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
      </Card>
    </>
  );
};

export default TodoItem;
