import { useState } from "react";
import axios from "axios";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("Form submitted");

    if (!description) return;

    const newItem = { description, quantity, packed: false };
    // console.log("New item:", newItem);

    try {

      // console.log("Sending request to:", 'http://127.0.0.1:8000/api/items');
      // Send data to Laravel API
      const response = await axios.post('http://127.0.0.1:8000/api/items', newItem);
      // console.log("API response:", response.data);
      // Assuming the API returns the saved item with an ID
      const savedItem = response.data;
      
      onAddItem(savedItem);
      setDescription("");
      setQuantity(1);
    } catch (error) {
      console.error("Error adding item:", error);
      // Log more details about the error
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}> 
        <h3>What do you need for your 😍 trip?</h3>
        {/* + use to convert from string to number  */}
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {
            Array.from({length: 20},(_,i) => i + 1).map((num) => 
              <option value={num} key={num}>{num}</option>
            )
          }
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>Add Item</button>
      </form>
    )
  }