// Categorize.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Categorize = () => {
  const [categories, setCategories] = useState(['']);
  const [items, setItems] = useState([{ value: '', category: '' }]);

  const addCategory = () => {
    setCategories([...categories, '']);
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  const removeCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const addItem = () => {
    setItems([...items, { value: '', category: '' }]);
  };

  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].value = value;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleSelectChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].category = value;
    setItems(updatedItems);
  };

  const saveData = async () => {
    try {
      alert("Data is saved successfully")
      await axios.post('https://super-backend-atta.onrender.com/api/categorize', { categories, items });
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <div>
        <label>Category</label>
        {categories.map((category, index) => (
          <div key={index}>
            <input
              value={category}
              placeholder={`Enter category ${index + 1}`}
              onChange={(e) => handleCategoryChange(index, e.target.value)}
            />
            <button onClick={() => removeCategory(index)}>X</button>
          </div>
        ))}
        <button onClick={addCategory}>Add Category</button>
      </div>

      <div>
        <label>Items</label>
        {items.map((item, index) => (
          <div key={index}>
            <input
              value={item.value}
              placeholder={`Enter item ${index + 1}`}
              onChange={(e) => handleItemChange(index, e.target.value)}
            />
            <button onClick={() => removeItem(index)}>X</button>
            <select
              value={item.category}
              placeholder={`Select category for item ${index + 1}`}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              {categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button onClick={addItem}>Add Item</button>
      </div>

 <button className='save' onClick={saveData}> save</button>


    </div>
  );
};

export default Categorize;
