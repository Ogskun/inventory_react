import { MdSearch } from 'react-icons/md'
import { FaGear } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

type TopNavProps = {
    headerTitle: string
}

const TopNav = ({ headerTitle }: TopNavProps) => {
    return (
        <div className='flex justify-between gap-1 pb-5'>
            <div className='flex items-center md:basis-[63%]'>
                <GiHamburgerMenu className='mx-1 size-6 items-center justify-center md:hidden' />
                <h1 className='hidden text-[22px] font-bold md:block'>
                    {headerTitle}
                </h1>
            </div>
            <div className='flex justify-between gap-2 md:basis-[37%]'>
                <div className='flex w-full items-center rounded-3xl bg-white md:w-3/4'>
                    <MdSearch className='mx-2 size-6' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='text-xs text-black focus:outline-none'
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <Link to='/profile'>
                        <FaUser className='size-10 rounded-full bg-red-900 p-2 text-white' />
                    </Link>
                    <FaGear className='size-10 rounded-full bg-gray-600 p-2 text-white' />
                </div>
            </div>
        </div>
    )
}

export default TopNav
