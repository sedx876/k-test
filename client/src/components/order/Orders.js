import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../cards/ShowPaymentInfo";

const Orders = ({ orders, handleStatusChange }) => {
  const showOrderInTable = (order) => (
    <>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Order ID</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Color</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th>
          <th scope="col">Email</th>
          <th scope="col">Name & Address</th>
        </tr>
      </thead>

      <tbody className="thead-light">
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.title}</b>
            </td>
            <td>
              <b>{order._id}</b>
            </td>
            <td>{p.product.price}</td>
            <td>{p.product.brand}</td>
            <td>{p.color}</td>
            <td>{p.count}</td>
            <td>
              {p.product.shipping === "Yes" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "red" }} />
              )}
            </td>
            <td>{order.orderdBy.email}</td>
            <td>{order.orderdBy.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <br/><br/><br/>
    </>
  );

  return (
    <>
    <br/><br/>
      {orders.map((order) => (
        <div key={order._id} className="row pb-5">
          <div className="btn btn-block bg-light">
            <ShowPaymentInfo order={order} showStatus={false} />

            <div className="row">
              <div className="col-md-4">Delivery Status</div>
              <div className="col-md-8">
                <select
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="form-control"
                  defaultValue={order.orderStatus}
                  name="status"
                >
                  <option value="Not Processed">Not Processed</option>
                  <option value="Cash On Delivery">Cash On Delivery</option>
                  <option value="Processing">Processing</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {showOrderInTable(order)}
        </div>
      ))}
    </>
  );
};

export default Orders;