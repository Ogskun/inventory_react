import Logo from '@/assets/logo-python.png'
import { Input } from '@/components/ui/input'

const Login = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[360px] rounded bg-white p-[30px] text-center shadow-md'>
                <img src={Logo} className='mx-auto w-[50px]' />

                <h4 className='mb-4 mt-2 font-pops text-sm font-medium'>
                    Login to your account
                </h4>

                <form method='POST' className='flex flex-col gap-4'>
                    <Input
                        type='text'
                        placeholder='Email Address'
                        className='w-full rounded border-[2px] px-5 py-3 text-sm font-normal'
                    />
                    <Input
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
