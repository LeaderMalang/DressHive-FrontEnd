import React from 'react'
import { MdOutlineShareLocation, MdOutlineMail, MdAddIcCall } from "react-icons/md";


function Contact() {
    return (
        <>
            <div className="mt-10 px-10 text-gray-700">
                <div className="relative">
                    <h1 className="text-4xl font-medium relative text-center">Contact</h1>
                    <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-[5%] h-1 bg-red-600"></div>
                </div>
                <p className="mt-8 px-4">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                <div className='lower-part w-full h-full mt-20 p-5 lg:flex lg:justify-between lg:items-center lg:gap-5'>
                    <div className=' w-full h-full flex flex-col gap-5 rounded-md'>
                        <div className='w-full h-1/2 flex flex-col justify-center items-center gap-3 p-5 rounded-md  ring-1 ring-inset ring-gray-300'>
                            <MdOutlineShareLocation size={70} color="rgb(239 68 68)" />
                            <h2 className='text-xl font-semibold'>Our Address</h2>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className='w-full h-1/2 rounded-md lg:flex lg:items-center lg:justify-between lg:gap-5'>
                            <div className='flex flex-col justify-center items-center gap-3 w-full lg:w-1/2 p-5 rounded-md ring-1 ring-inset ring-gray-300'>
                                <MdOutlineMail size={70} color="rgb(239 68 68)" />
                                <h2 className='text-xl font-semibold'>Email Us</h2>
                                <a href="mailto: name@email.com">email@female.com</a>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3 w-full lg:w-1/2 p-5 rounded-md ring-1 ring-inset ring-gray-300'>
                                <MdAddIcCall size={70} color="rgb(239 68 68)" />
                                <h2 className='text-xl font-semibold'>Call Us</h2>
                                <p>0300-123456789</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full p-6 rounded-md ring-1 ring-inset ring-gray-300'>

                        <form action="#" method="POST">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 ">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full min-h-16 max-h-16 rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact