import { useState } from 'react';
import InventoryList from '../components/InventoryList';
import AddItemForm from '../components/AddItemForm';
import data from '../public/data.json';

const Inventory = () => {
  const [items, setItems] = useState(data.items);
  const [filter, setFilter] = useState('');

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filterItems = () => {
    return items.filter(item => filter === 'in-stock' ? item.stock > 0 : filter === 'out-of-stock' ? item.stock === 0 : true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="mb-4">
        <label className="mr-2">Filter by stock:</label>
        <select onChange={(e) => setFilter(e.target.value)} className="border p-2">
          <option value="">All</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>
      </div>
      <InventoryList items={filterItems()} onDelete={deleteItem} />
      <h2 className="text-xl font-bold mt-4 mb-2">Add New Item</h2>
      <AddItemForm onAdd={addItem} />
    </div>
  );
};

export default Inventory;
