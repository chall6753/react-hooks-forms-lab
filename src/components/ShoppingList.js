import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue]=useState('')
  const [itemArray, setArray]=useState(items)
 
  function addItemToArray(itemName, categoryName){
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category:categoryName,
      };
    
   
    setArray([...itemArray, newItem]);
  }
      
    
    
     
  

  function handleSearch(event){
    setSearchValue(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

 
  const itemsToDisplay = itemArray.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItemToArray}/>
      <Filter search={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => {
          if (searchValue === ''){
            return <Item key={item.id} name={item.name} category={item.category} />
          }else if (item.name === searchValue){
            return <Item key={item.id} name={item.name} category={item.category} />
          }else{}
      })}
      </ul>
    </div>
  );
}

export default ShoppingList;
