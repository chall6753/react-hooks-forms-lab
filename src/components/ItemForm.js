import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";


function ItemForm(props) {
  
  const [itemName, setItemName]=useState('')
  const [categoryName, setCategoryName]=useState('Produce')
  const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category:categoryName,
      };
  
  function addItem(event){
    event.preventDefault() 
    
    if (event.target.name === 'name'){
      setItemName(event.target.value)
    }else if (event.target.name === 'category'){
      setCategoryName(event.target.value)
    }

    
  }
      
  function createItem(event){
    event.preventDefault()
    props.onItemFormSubmit(itemName, categoryName)
  }
      



  return (
    <form className="NewItem">
      <label>
        Name:
        <input onChange={addItem} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={addItem}name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={createItem} type="submit">Add to List</button>
    </form>
  );
    
}

export default ItemForm;
