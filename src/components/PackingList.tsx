import { useState } from "react";
import Item from "./Item";
export default function PackingList({items, setItems, onDeleteItem, onPackedItem}){

    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
  
    if(sortBy === "input") sortedItems = items;
  
    if(sortBy === "description") sortedItems = items.slice().sort(
      (a,b) => a.description.localeCompare(b.description)
    )
  
    if(sortBy === "packed") sortedItems = items.slice().sort(
      (a,b) => Number(a.packed) - Number(b.packed)
    )
    function handleDeleteList(){
      const confirmed = window.confirm("Are you sure you want to delete all items?");
      if(confirmed) setItems([])
    }
    return (
      <div className="list">
        <ul>
          {
            sortedItems.map((item) => <Item item={item} onDeleteItem = {onDeleteItem} onPackedItem = {onPackedItem} key={item.id}/>)
          }
        </ul>
  
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={handleDeleteList}>CLear List</button>
        </div>
      </div>
    )
  }