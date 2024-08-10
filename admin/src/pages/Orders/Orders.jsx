import React, { useState, useEffect } from "react";
import "./Orders.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        try {
            const response = await axios.get(`${url}/api/order/list`);
            if (response.data.success) {
                setOrders(response.data.data);
            } else {
                toast.error("Error fetching orders");
            }
        } catch (error) {
            toast.error("Error fetching orders");
            console.error(error);
        }
    };

    const statusHandler = async (event, orderId) => {
        try {
            const response = await axios.post(`${url}/api/order/status`, {
                orderId,
                status: event.target.value,
            });
            if (response.data.success) {
                await fetchAllOrders();
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            toast.error("Failed to update status");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        <div className="order add">
            <h3>Order Page</h3>
            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={index} className="order-item">
                        <img src={assets.parcel_icon} alt="Parcel Icon" />
                        <div>
                            <p className="order-item-food">
                                {order.items.map((item, idx) =>
                                    `${item.name} x ${item.quantity}${idx === order.items.length - 1 ? '' : ', '}`
                                )}
                            </p>
                            <p className="order-item-name">
                                {`${order.address.firstName} ${order.address.lastName}`}
                            </p>
                            <div className="order-item-address">
                                <p>{`${order.address.no_table} `}</p>
                            </div>
                            <p className="order-item-phone">{order.address.deskripsi}</p>
                        </div>
                        <p>Items: {order.items.length}</p>
                        <p>Rp{order.amount}.000</p>
                        <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                            <option value="Food Processing">Food Processing</option>
                            <option value="Out For Delivery">Out For Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
