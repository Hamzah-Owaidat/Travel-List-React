import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from "./Stats";



export default function App(){

  const [items, setItems] = useState([]);

  function handleAddItem(item){
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handlePackedItem(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }

  
  

  return (
    <div className="app">
      <Logo />
      <Form onAddItem = {handleAddItem}/>
      <PackingList items = {items} setItems = {setItems} onDeleteItem = {handleDeleteItem} onPackedItem = {handlePackedItem} />
      <Stats items = {items}/>
    </div>
  )
  
}





