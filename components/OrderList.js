import Link from 'next/link';

const OrderList = ({ orders }) => {
  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">ID</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Customer</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Status</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Item Count</th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {orders.map(order => (
          <tr key={order.id} className="bg-white border border-gray-300 md:border-none block md:table-row">
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
              <Link href={`/${order.id}`}>{order.id}</Link>
            </td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{order.customer}</td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{order.status}</td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{order.items.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
