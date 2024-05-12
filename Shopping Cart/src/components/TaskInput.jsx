import React from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function TaskInput(props) {
  const {
    itemName,
    quantity,
    onNameChange,
    onQuantityChange,
    onKeyDown,
    onClick,
  } = props;

  return (
    <div className="form"
    >
      <Input
        type="text"
        value={itemName}
        onChange={onNameChange}
        onKeyDown={onKeyDown}
        placeholder="What would you like to buy?"
        style={{ marginRight: '10px', fontFamily: "Architects Daughter, cursive" }} // Use flex to maintain proper width and space between inputs
      />
      <Input
        type="number"
        value={quantity}
        onChange={onQuantityChange}
        min={1}
        placeholder="Quantity"
        style={{ width: '15%', textAlign: 'center' }} // Explicitly set the width for the quantity input
      />
      <Button onClick={onClick}>
        <PlusOutlined />
      </Button>
    </div>
  );
}

export default TaskInput;
