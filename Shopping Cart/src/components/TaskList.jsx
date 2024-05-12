import React from 'react';
import Li from './Li';
import {DeleteOutlined} from "@ant-design/icons";



function TaskList(props) {

    const { shoppingList, onDelete } = props;

    return (
        <ul>
            {shoppingList.map((item, index) => (
            <div
            style = {{ display: 'flex', justifyContent: 'space-between'}}
            key = {index}
            > 
                <Li
                key={index}
                id={index}
                item={item.name}  // Display the item name
                quantity={item.quantity}  // Display the quantity
                />
            <button 
            onClick={() => onDelete(index)} 
            style = {{backgroundColor: 'transparent'}}  
            >
            <DeleteOutlined  
                style = {{fontSize : "20px"}}
            />
            </button>
            </div>
            ))}
        </ul>
    );
  
}

export default TaskList;
