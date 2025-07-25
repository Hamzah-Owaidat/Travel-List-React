import { useEffect, useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from "./Stats";
import axios from 'axios';


export default function App(){

  const [items, setItems] = useState([]);

  function handleAddItem(item){
    setItems((items) => [...items, item])
  }

  async function fetchData(){
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  async function handleDeleteItem(id){
    try {
      await axios.delete(`http://127.0.0.1:8000/api/items/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  async function handlePackedItem(id){
    try {
      const item = items.find(item => item.id === id);
      const response = await axios.patch(`http://127.0.0.1:8000/api/items/${id}`, {
        packed: !item.packed
      });
      setItems(items.map(item => 
        item.id === id ? { ...item, packed: response.data.packed } : item
      ));
    } catch (error) {
      console.error('Error updating item:', error);
    }
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





