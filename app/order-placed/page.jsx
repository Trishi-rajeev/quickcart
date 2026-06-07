"use client";

import { useEffect, useState } from "react";

export default function OrderPlaced() {
  const [orderId, setOrderId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    setOrderId(localStorage.getItem("orderId") || "");
    setPaymentMethod(localStorage.getItem("paymentMethod") || "");
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl w-full border rounded-xl shadow-lg p-8 bg-white">
        <h1 className="text-4xl text-green-600 font-bold">
          Order Confirmed
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for shopping with QuickCart
        </p>

        <div className="mt-8 space-y-3">
          <p>
            <strong>Order ID:</strong> {orderId}
          </p>

          <p>
            <strong>Status:</strong> Confirmed
          </p>

          <p>
            <strong>Payment Method:</strong> {paymentMethod}
          </p>

          <p>
            <strong>Estimated Delivery:</strong> 3-5 Days
          </p>

          <p>
            <strong>Email:</strong> harshitrajeev118@gmail.com
          </p>
        </div>

        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-700">
            ✓ Order placed successfully
          </p>

          <p className="font-medium">
            QuickCart Team
          </p>
        </div>
      </div>
    </div>
  );
}