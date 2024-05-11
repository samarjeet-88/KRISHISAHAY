import React, { useState } from "react";
import axios from "axios";
import CompareFlashCard from "./CompareFlashCard";

function CompareItem() {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  const fetchItems = async () => {
    if (!itemName.trim()) {
      setItems([]);
      return;
    }

    try {
        const response = await axios.get(`http://localhost:3002/compare`, { params: { itemName } });

      const fetchedItems = response.data;
      console.log(fetchedItems);


      const sortedItems = fetchedItems.sort((a, b) => a.price - b.price);
      setItems(sortedItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchItems();
  };

  return (
    <div>
      <h1 className="text-white">Compare Items</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={handleInputChange}
          placeholder="Enter Item Name"
        />
        <button type="submit" className="focus:outline-none text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">Search</button>
      </form>
      <div className="grid grid-cols-4 mt-3">
        {items.map(item=>(
            <CompareFlashCard item={item}/>
        ))}
      </div>
    </div>
  );
}

export default CompareItem;
