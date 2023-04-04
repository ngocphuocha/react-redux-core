import { Button, Col, Form, Input, Row, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodoItem, deleteTotoItem } from "../store/actions/todoAction";
import TodoItem from "../components/TodoItem";

const Todos = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todoReducer.todos);
  const loading = useSelector((state) => state.todoReducer.loading);
  const dispatch = useDispatch();

  const addNewTodo = () => {
    const form = {
      id: uuidv4(),
      title,
    };
    dispatch(addTodoItem(form));
    setTitle("");
  };

  return (
    <>
      <Row justify={"center"} wrap={true}>
        <Col span={10}>
          <p>Add new todo</p>
          <Form>
            <Space>
              <Input
                value={title}
                placeholder="Enter todo name"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Space />
              <Button onClick={addNewTodo}>Submit</Button>
            </Space>
          </Form>
        </Col>
      </Row>
      {loading && <div>Loading...</div>}

      {todos.length && (
        <Row justify={"center"} style={{ paddingTop: "40px" }}>
          <Col span={14}>
            <Row justify={"center"} gutter={[16, 16]}>
              {todos.map((todoItem) => (
                <Col key={todoItem.id} span={12}>
                  <TodoItem todo={todoItem} />
                  <div>{todoItem.id}</div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Todos;
