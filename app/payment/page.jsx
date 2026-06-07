"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function PaymentPage() {

    const { getCartAmount, currency, router } = useAppContext();

    const [paymentMethod, setPaymentMethod] = useState("UPI");

    const total = getCartAmount() + 40;

    const placeOrder = async () => {

        const orderId =
            "QC" +
            Math.floor(Math.random() * 1000000);

        localStorage.setItem("orderId", orderId);
        localStorage.setItem("paymentMethod", paymentMethod);

        await fetch("/api/send-order-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderId,
                amount: total,
                paymentMethod,
                customerEmail: "harshitrajeev118@gmail.com",
            }),
        });

        router.push("/order-placed");
    };

    return (
        <div className="px-6 md:px-16 lg:px-32 py-10">

            <h1 className="text-3xl font-bold mb-8">
                Secure Checkout
            </h1>

            <div className="grid md:grid-cols-2 gap-10">

                <div className="border rounded-xl p-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Delivery Address
                    </h2>

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border p-3 rounded mb-3"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border p-3 rounded mb-3"
                    />

                    <textarea
                        rows="4"
                        placeholder="Full Address"
                        className="w-full border p-3 rounded"
                    />

                </div>

                <div className="border rounded-xl p-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Payment Details
                    </h2>

                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{currency}{getCartAmount()}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>{currency}40</span>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{currency}{total.toFixed(2)}</span>
                    </div>

                    <h3 className="font-semibold mt-6">
                        Payment Method
                    </h3>

                    <div className="mt-3">

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                checked={paymentMethod === "UPI"}
                                onChange={() => setPaymentMethod("UPI")}
                            />
                            UPI Payment
                        </label>

                    </div>

                    <div className="mt-5 border rounded-lg p-4">

                        <h4 className="font-medium">
                            Scan & Pay
                        </h4>

                        <Image
                            src="/upi-qr.jpg.jpeg"
                            alt="UPI QR"
                            width={200}
                            height={200}
                            className="mt-3"
                        />

                        <p className="mt-3 text-sm">
                            UPI ID: harshitrajeev@oksbi
                        </p>

                        <p className="text-green-600 font-medium mt-2">
                            Secure UPI Payment
                        </p>

                    </div>

                    <button
                        onClick={placeOrder}
                        className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
                    >
                        Pay & Place Order
                    </button>

                </div>

            </div>

        </div>
    );
}