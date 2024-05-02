import React from 'react';
import { useParams , Link } from 'react-router-dom';

const HomePageCategoryDetails = ({ products }) => {
    const { categoryName } = useParams();

    // Filter products based on the category name
    const categoryProducts = products.filter(product => product.category === categoryName);

    return (
        <>
            <div className="mt-10 px-10">
                <div className="relative">
                    <h1 className="text-4xl font-medium text-gray-700 relative text-center">{categoryName}</h1>
                    <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-[5%] h-1 bg-red-600"></div>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {categoryProducts.map(product => (
                                <div key={product.id} className="group">
                                    <div className="relative bg-gray-200 rounded-lg overflow-hidden">
                                        <div
                                            className="pb-[100%] relative"
                                            style={{ paddingBottom: '100%' }}
                                        >
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 group-hover:opacity-75 ease-in duration-300"
                                            />
                                        </div>
                                        <div className="p-4 absolute bottom-0 right-auto left-0 hidden group-hover:block ease-in duration-300">
                                            <h3 className="mt-2 text-lg font-bold text-gray-700 text-left">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900 text-left">{product.price}</p>
                                            <button className="bg-red-600 px-5 py-2 rounded-md mt-2"><Link to={`/products/${product.id}`}>View Details</Link></button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageCategoryDetails;
