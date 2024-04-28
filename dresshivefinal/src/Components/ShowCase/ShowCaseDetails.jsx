// ShowCaseDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ShowCaseDetails = ({ products, addToCart }) => {
    const { id } = useParams();
    const productId = parseInt(id);
    const product = products.find(product => product.id === productId);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <>
        <div className='w-full h-[90vh] flex items-center justify-center gap-10 p-20'>
            <div className='h-full w-3/5'>
            <img className='w-full h-full object-cover' src={product.imageSrc} alt={product.imageAlt} />
            </div>
            <div className='h-full w-2/5 p-5 text-gray-700'>
                <h2 className='font-semibold text-4xl mb-5'>Product Information</h2>
                <hr className='mb-5 border-b border-gray-700' />
                <h2 className='font-semibold text-2xl mb-3'>Product Name: {product.name}</h2>
                <p className='mb-3'><span className='font-semibold'>Category: </span>{product.category}</p>
                <p className='mb-3'><span className='font-semibold'>Price: </span>{product.price}</p>
                <p className='mb-3 max-h-32 overflow-auto'><span className='font-semibold'>Abot the Product: </span>{product.description}</p>
                <button className="bg-red-600 px-5 py-2 rounded-md mt-2 text-white" onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </div>
        </>
    );
};

export default ShowCaseDetails;
