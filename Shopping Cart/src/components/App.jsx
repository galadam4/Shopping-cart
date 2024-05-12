import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import Submit from './Submit';
import { ShoppingCartOutlined } from '@ant-design/icons';

function App() {
  const [itemName, setItemName] = useState(''); // State for item name
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [shoppingList, setShoppingList] = useState([]); // State for shopping list
  const [isEmpty, setIsEmpty] = useState(true); // State for if shoppingList array is empty

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleAddItem() {
    if (itemName === '' || quantity < 1) {
      return;
    }

    setShoppingList((prev) => [
      ...prev,
      { name: itemName, quantity: parseInt(quantity) }, // Parse quantity as an integer
    ]);

    setItemName(''); // Clear the input field
    setQuantity(1); // Reset to default
    setIsEmpty(false);
  }

  function handleDeleteItem(index) {
    if (shoppingList.length === 1) {
      setIsEmpty(true);
    }

    setShoppingList((prev) => prev.filter((_, i) => i !== index));
  }

  function handleEnterKey(event) {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Shopping List <ShoppingCartOutlined /></h1>
      </div>
      <TaskInput
        itemName={itemName}
        quantity={quantity}
        onNameChange={handleItemNameChange}
        onQuantityChange={handleQuantityChange}
        onKeyDown={handleEnterKey}
        onClick={handleAddItem}
      />
      <TaskList  shoppingList={shoppingList} onDelete={handleDeleteItem} />
      <Submit isEmpty={isEmpty} shoppingList={shoppingList} />
    </div>
  );
}

export default App;
