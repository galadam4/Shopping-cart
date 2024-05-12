import React, { useState } from 'react';

function Li({ item, quantity, id }) {
  const [isStruck, setStruck] = useState(false);

  // Define a strike-through style
  const strikeThroughStyle = {
    textDecoration: 'line-through',  // Correct style syntax
  };

  const handleToggleStrike = () => {
    setStruck(!isStruck);  // Toggle the state
  };
  return (
    <li
      key={id}
      style={isStruck ? strikeThroughStyle : {}}  // Apply the strike-through style conditionally
      onClick={handleToggleStrike}  // Use the event handler to toggle
    >
      {item} - Quantity: {quantity}
    </li>
  );
}

export default Li;
