import React from "react";
import { Button, Form } from "react-bootstrap";
const FormTodo = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Item</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input my-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new Item"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodo;
