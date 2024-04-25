import React from 'react'
import { MdOutlineShareLocation, MdOutlineMail, MdAddIcCall } from "react-icons/md";


function Contact() {
    return (
        <>
            <div className="mt-10 px-10">
                <div className="relative">
                    <h1 className="text-4xl font-medium text-gray-700 relative text-center">Contact</h1>
                    <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-[5%] h-1 bg-red-600"></div>
                </div>
                <p className="mt-8 px-4">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                <div className='lower-part w-full h-full mt-20 p-5 lg:flex lg:justify-between lg:items-center lg:gap-5'>
                    <div className=' w-full h-full flex flex-col gap-5 rounded-md'>
                        <div className='w-full h-1/2 flex flex-col justify-center items-center gap-3 p-5 rounded-md shadow-xl'>
                            <MdOutlineShareLocation size={70} color="rgb(239 68 68)" />
                            <h2 className='text-xl font-semibold text-gray-600'>Our Address</h2>
                            <p className='text-gray-600'>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className='w-full h-1/2 rounded-md lg:flex lg:items-center lg:justify-between lg:gap-5'>
                            <div className='flex flex-col justify-center items-center gap-3 w-full lg:w-1/2 p-5 rounded-md shadow-xl'>
                                <MdOutlineMail size={70} color="rgb(239 68 68)" />
                                <h2 className='text-xl font-semibold text-gray-600'>Email Us</h2>
                                <a className='text-gray-600' href="mailto: name@email.com">email@female.com</a>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3 w-full lg:w-1/2 p-5 rounded-md shadow-xl'>
                                <MdAddIcCall size={70} color="rgb(239 68 68)" />
                                <h2 className='text-xl font-semibold text-gray-600'>Call Us</h2>
                                <p className='text-gray-600'>0300-123456789</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-3 p-3 rounded-md shadow-xl'>
                        <div className='flex justify-center items-center gap-5 w-full'>
                            <input type="text" name="name" id="name" placeholder='Your Name' className='border-[1px] w-1/2 p-2 rounded' />
                            <input type="email" name="email" id="email" placeholder='Your Email' className='border-[1px] w-1/2 p-2 rounded' />
                        </div>
                        <div className='w-full'>
                            <input type="text" name="subject" id="subject" placeholder='Subject' className='border-[1px] w-full p-2 rounded' />
                        </div>
                        <div className='w-full'>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='border-[1px] min-w-full max-w-full min-h-52 max-h-52 p-2 rounded'></textarea>
                        </div>
                        <button className='bg-red-500 py-2 px-7 rounded font-semibold text-white hover:bg-red-400'>Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact