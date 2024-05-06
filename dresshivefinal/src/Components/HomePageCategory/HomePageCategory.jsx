import React from 'react';
import { Link } from 'react-router-dom';

const HomePageCategory = ({ categories }) => {
    return (
        <>
            <div className="bg-white">
            <div className="relative mt-10">
                <h1 className="text-4xl font-medium text-gray-700 relative text-center">Categories</h1>
                <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-[5%] h-1 bg-red-600"></div>
            </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                   

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {categories && categories.map(category => (
                            <div key={category.name} className="group">
                                <div className="relative bg-gray-200 rounded-lg overflow-hidden">
                                    <div
                                        className="pb-[100%] relative"
                                        style={{ paddingBottom: '100%' }}
                                    >
                                        <img
                                            src={category.imageSrc}
                                            alt={category.name}
                                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 group-hover:opacity-75 ease-in duration-300"
                                        />
                                    </div>

                                </div>
                                    <h3 className="mt-2 text-lg font-bold text-gray-700 text-left">{category.name}</h3>
                                    <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 w-full mt-1"><Link to={`/category/${category.name}`}>See More</Link></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageCategory;
