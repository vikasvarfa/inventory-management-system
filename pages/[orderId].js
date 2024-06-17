import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import data from '../public/data.json';

const OrderDetails = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (orderId) {
      const orderData = data.orders.find(order => order.id === parseInt(orderId));
      setOrder(orderData);
    }
  }, [orderId]);

  if (!order) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <table className="min-w-full border-collapse block md:table mt-4">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Item</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Quantity</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Stock</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {order.items.map(item => {
            const inventoryItem = data.items.find(i => i.id === item.id);
            return (
              <tr key={item.id} className="bg-white border border-gray-300 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{item.name}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{item.quantity}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{inventoryItem?.stock ?? 'N/A'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {order.status === 'Pending' && (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2" onClick={() => setOrder({...order, status: 'Completed'})}>
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default OrderDetails;
