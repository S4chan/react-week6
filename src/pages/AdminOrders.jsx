import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/${API_PATH}/admin/orders`
        );
        setOrders(response.data.orders);
      } catch (error) {
        console.error("獲取訂單失敗：", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4">訂單管理</h1>

      {loading ? (
        <p>載入中...</p>
      ) : orders.length === 0 ? (
        <p>尚無訂單</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂單日期</th>
              <th>用戶姓名</th>
              <th>聯絡電話</th>
              <th>電子郵件</th>
              <th>地址</th>
              <th>是否付款</th>
              <th>留言</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  {new Date(order.create_at * 1000).toLocaleDateString("zh-TW")}
                </td>
                <td>{order.user.name}</td>
                <td>{order.user.tel}</td>
                <td>{order.user.email}</td>
                <td>{order.user.address}</td>
                <td>{order.is_paid ? "已付款" : "未付款"}</td>
                <td>{order.message || "無留言"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
