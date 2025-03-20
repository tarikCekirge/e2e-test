import React from 'react'

const Form = () => {
    return (
        <form className='w-full max-w-sm px-6 py-8 bg-slate-200 shadow-lg rounded-lg'>
            <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='email'>
                    Email
                </label>
                <input
                    className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Email'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='email'>
                    Password
                </label>
                <input
                    className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    placeholder='**********'
                />
            </div>
            <div className='flex items-center justify-end gap-3'>
                <button type="reset" className='text-slate-800 font-semibold'>Clear</button>
                <button type='submit' className='bg-slate-700 text-white font-semibold px-8 py-3 rounded-md'>Login</button>
            </div>
        </form>
    )
}

export default Form