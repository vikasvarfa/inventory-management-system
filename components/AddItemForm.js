import { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), name, stock: parseInt(stock) });
    setName('');
    setStock(0);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block mb-1">Item Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full" required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Stock</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="border p-2 w-full" required />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Add Item</button>
    </form>
  );
};

export default AddItemForm;
