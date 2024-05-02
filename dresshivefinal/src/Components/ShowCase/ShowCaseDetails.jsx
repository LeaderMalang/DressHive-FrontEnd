import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiCirclePlus , CiCircleMinus } from "react-icons/ci";

const ShowCaseDetails = ({ products, addToCart }) => {
    const { id } = useParams();
    const productId = parseInt(id);
    const product = products.find(product => product.id === productId);

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <>
            <div className='w-full h-[90vh] flex items-center justify-center gap-10 p-20'>
                <div className='h-full w-3/5'>
                    <img className='w-full h-full object-cover' src={product.imageSrc} alt={product.imageAlt} />
                </div>
                <div className='h-full w-2/5 px-5 text-gray-700'>
                    <h2 className='font-semibold text-4xl mb-5'>Product Information</h2>
                    <hr className='mb-5 border-b border-gray-700' />
                    <h2 className='font-semibold text-2xl mb-3'>Product Name: {product.name}</h2>
                    <p className='mb-3'><span className='font-semibold'>Category: </span>{product.category}</p>
                    <p className='mb-3'><span className='font-semibold'>Price: </span>{product.price}</p>
                    <div className="flex items-center mb-3">
                        <span className="mr-3 font-semibold">Quantity:</span>
                        <button  onClick={decrementQuantity}><CiCircleMinus size={30} color='#e53e3e'/></button>
                        <span className="mx-3">{quantity}</span>
                        <button  onClick={incrementQuantity}><CiCirclePlus size={30} color='#e53e3e'/></button>
                    </div>
                    <p className='mb-3 max-h-32 overflow-auto'><span className='font-semibold'>About the Product: </span>{product.description}</p>
                    <button className="bg-red-600 px-5 py-2 rounded-md mt-2 text-white" onClick={() => addToCart({ ...product, quantity })}>Add To Cart</button>
                </div>
            </div>
        </>
    );
};

export default ShowCaseDetails;
