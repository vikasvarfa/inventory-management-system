import { useState } from 'react';
import OrderList from '../components/OrderList';
import data from '../public/data.json';

export default function Home() {
  const [orders, setOrders] = useState(data.orders);
  const [statusFilter, setStatusFilter] = useState('');

  const filterOrders = () => {
    return orders.filter(order => statusFilter ? order.status === statusFilter : true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="mb-4">
        <label className="mr-2">Filter by status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)} className="border p-2">
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <OrderList orders={filterOrders()} />
    </div>
  );
}
