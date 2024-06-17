const InventoryList = ({ items, onDelete }) => {
    return (
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">ID</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Name</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Stock</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {items.map(item => (
            <tr key={item.id} className="bg-white border border-gray-300 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{item.id}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{item.name}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{item.stock}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                <button className="bg-red-500 text-white px-2 py-1" onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default InventoryList;
  