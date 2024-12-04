import React from 'react'
import Logo from '../assets/logo-python.png'

const Login = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[360px] rounded bg-white p-[30px] text-center shadow-md'>
                <div className='mx-auto w-[50px]'>
                    <img src={Logo} />
                </div>
                <h4 className='mb-5 mt-1 font-medium'>Login to your account</h4>

                <form method='POST' className='flex flex-col gap-4'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='w-full rounded border-[2px] px-5 py-3 text-sm font-normal'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='w-full rounded border-[2px] px-5 py-3 text-sm font-normal'
                    />
                    <button className='mb-1 w-full cursor-pointer rounded bg-[#BF2323] px-5 py-3 text-sm font-normal text-white hover:bg-[#a81e1e]'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
