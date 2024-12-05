import { Input } from '@/components/ui/input'

const Profile = () => {
    return (
        <div className='flex flex-col gap-8'>
            {/* General info */}
            <div className='rounded-sm bg-white p-7'>
                <div className='mb-4 flex justify-between'>
                    <h1 className='font-sans text-[15px] font-extrabold'>
                        General Information
                    </h1>
                    <button className='bg-transparent font-sans text-sm text-blue-600'>
                        Edit
                    </button>
                </div>
                <div className='grid grid-flow-row grid-rows-1 gap-5 md:grid-flow-col md:grid-rows-2 lg:grid-rows-1'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                            Firstname
                        </p>
                        <Input className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                            Lastname
                        </p>
                        <Input className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                            Email Address
                        </p>
                        <Input className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                            Role
                        </p>
                        <Input className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]' />
                    </div>
                </div>
            </div>

            {/* Change password */}
            <div className='rounded-sm bg-white p-7'>
                <div className='mb-4 flex justify-between'>
                    <h1 className='font-sans text-[15px] font-extrabold'>
                        ChangePassword
                    </h1>
                    <button className='bg-transparent font-sans text-sm text-blue-600'>
                        Change Password
                    </button>
                </div>
                <div className='grid grid-flow-row grid-rows-1 gap-5 md:grid-flow-col md:grid-cols-2 lg:grid-cols-4'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                            Password
                        </p>
                        <Input
                            className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]'
                            placeholder='********'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
