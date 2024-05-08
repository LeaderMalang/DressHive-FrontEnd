import React, { useState } from 'react';

export default function CheckOut({ cartItems }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phone: '',
        // paymentMethod: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
        zipPayment: ''
    });

    const submitForm = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., sending data to backend, etc.
        console.log("Form submitted with data:", formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            phone: '',
            // paymentMethod: '',
            cardNumber: '',
            expiration: '',
            cvv: '',
            zipPayment: ''
        });
    };

    // Calculate subtotal and total
    const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    const total = subtotal + 5.99 - 10.00; // Assuming shipping is $5.99 and discount is $10.00

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0 text-gray-700">
             <div className="rounded-lg p-6 space-y-4 ring-1 ring-inset ring-gray-300">
                <h2 className="text-2xl font-bold">Order Summary</h2>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Shipping</p>
                        <p>$5.99</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Discount</p>
                        <p className="text-red-600">-$10.00</p>
                    </div>
                    <div className="flex justify-between items-center font-bold">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-bold">Items in Cart</h3>
                    <div className="grid gap-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Product Image"
                                        className="rounded-md"
                                        height={64}
                                        src={item.imageSrc}
                                        style={{
                                            aspectRatio: "64/64",
                                            objectFit: "cover",
                                        }}
                                        width={64}
                                    />
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="rounded-lg p-6 space-y-4 ring-1 ring-inset ring-gray-300">
                    <h2 className="text-2xl font-bold">Billing Information</h2>
                    <form className="space-y-4" onSubmit={submitForm}>
                        <div className="flex items-center w-full gap-3">
                            <div className='w-full'>
                                <label htmlFor="name">Name</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="block w-full rounded-md border-0 px-3.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="email">Email</label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className="block w-full rounded-md border-0 px-3.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full gap-3">
                            <div className='w-full'>
                                <label htmlFor="city">City</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        className="block w-full rounded-md border-0 px-3.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="state">State</label>
                                <div className="mt-2">
                                    <input
                                        id="state"
                                        name="state"
                                        type="text"
                                        value={formData.state}
                                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full gap-3">
                            <div className='w-full'>
                                <label htmlFor="zipcode">ZIP Code</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="zipcode"
                                        id="zipcode"
                                        value={formData.zipcode}
                                        onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
                                        className="block w-full rounded-md border-0 px-3.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="phone">Phone No.</label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                        </div>
                        {/* <div className='flex justify-center items-center w-full gap-3'>
                            <div>
                                <label htmlFor="paymentMethod">Payment Method</label>
                                <div className="mt-2">
                                    <select
                                        id="paymentMethod"
                                        name="paymentMethod"
                                        value={formData.paymentMethod}
                                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Select Payment Method</option>
                                        <option value="credit-card">Credit Card</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="apple-pay">Apple Pay</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                        <div className="rounded-lg p-6 space-y-4 ring-1 ring-inset ring-gray-300">
                            <h2 className="text-2xl font-bold">Payment</h2>
                            <div>
                                <label htmlFor="cardnumber">Card Number</label>
                                <div className="mt-2">
                                    <input
                                        id="cardnumber"
                                        name='cardnumber'
                                        type="text"
                                        value={formData.cardNumber}
                                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                        placeholder="1111 1111 1111 1111"
                                        className="block w-1/2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='carddetails w-full flex justify-center items-center gap-3'>
                                <div>
                                    <label htmlFor="expiration">Expiration</label>
                                    <div className="mt-2">
                                        <input
                                            id="expiration"
                                            name='expiration'
                                            type="text"
                                            value={formData.expiration}
                                            onChange={(e) => setFormData({ ...formData, expiration: e.target.value })}
                                            placeholder='MM/YY'
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="cvvfigure">CVV</label>
                                    <div className="mt-2">
                                        <input
                                            id="cvvfigure"
                                            name='cvvfigure'
                                            type="text"
                                            value={formData.cvv}
                                            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                            placeholder='123'
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="zippayment">ZIP Code</label>
                                    <div className="mt-2">
                                        <input
                                            id="zippayment"
                                            name='zippayment'
                                            type="text"
                                            value={formData.zipPayment}
                                            onChange={(e) => setFormData({ ...formData, zipPayment: e.target.value })}
                                            placeholder='00000'
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-5'>
                            <button
                                type="submit"
                                className="flex w-1/2 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
