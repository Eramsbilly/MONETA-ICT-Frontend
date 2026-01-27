import React from "react";

export default function AdminPayments() {
  return (
    <div className="card">
      <h2>Admin Payments</h2>
      <p>Pending Deposits & Withdrawals</p>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>user@email.com</td>
            <td>$100</td>
            <td>Deposit</td>
            <td>Pending</td>
            <td>
              <button className="btn">Approve</button>
              <button className="btn">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}