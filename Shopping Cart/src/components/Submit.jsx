import React from 'react';
import { Button } from 'antd';
import axios from 'axios'; 


 function Submit({ isEmpty, shoppingList }) {
  const handleSubmit = async () => {
    if (isEmpty) {
      console.log('Shopping list is empty, nothing to submit.');
      return;
    }

    // Send POST request with shopping list to backend
    return await axios
      .post('http://localhost:3000/api/shopping-list', shoppingList)
      .then((response) => {
        console.log('Response from API:', response.data);
      })
      .catch((error) => {
        console.error('Error sending shopping list to API:', error);
      });
  };

  return (
    <Button type="primary"
     onClick={handleSubmit} 
     disabled={isEmpty}
     style = {{fontFamily:  "Architects Daughter, cursive", backgroundColor : "#6ebdfd"}}
     >
      Checkout! 
    </Button>
  );
}

export default Submit;
